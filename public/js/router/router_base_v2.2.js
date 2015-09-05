


var routerSetupConfig = {

    status : {
        currentPage : '',
        lastPage : '',
        currentRoute : '',
        currentFragsArray : [],
        currentQueryString : '',
        currentQueryStringArray : []
        // app.status is for app wide vars (this may include data returned from ajax)
        // for page level vars, please store in the view for that page. Example this.homeView.myvar = 12;
    },



    routeTunnel: function(currentPage, view, f, q){
        var self = this;
        // fix a bug where the querystring ends up in frags, its rare and happens when URL is '#?aaa=555' or '#/?aaa=555'
        if ( currentPage == 'home' && f && !q ) { q = f; f= null; }

        // keep app.status up-to-date !
        var pageChanged = false;
        if ( this.status.currentPage != currentPage ) {
            pageChanged = true;
            this.status.lastPage = this.status.currentPage;
            this.status.currentPage = currentPage;
        }
        this.status.currentRoute = Backbone.history.fragment;
        this.status.currentFragsArray =  f ? f.split('/') : [];
        this.status.currentQueryString = q;
        /*  convert query string to Array of objects  */
        this.status.currentQueryStringArray = (typeof q ==='string') ? q.split('&') : [];
        // filter out any arg that does not contain an '='
        this.status.currentQueryStringArray = _.filter(this.status.currentQueryStringArray, function(v){ return v.indexOf('=') > -1; });
        // convert to object
        _.each(this.status.currentQueryStringArray, function(v,i){
            if (v.indexOf('=') > -1) {
                self.status.currentQueryStringArray[i] = JSON.parse('{"' + v.replace('=', '":"') + '"}');
            }
        });        

        // track routing on the console
        if (pageChanged) { console.log('\n-- new route (new page)'); } else { console.log('\n-- new route (hashchange only)'); }
        console.log('app.status.currentPage='+this.status.currentPage +
            '\napp.status.lastPage='+this.status.lastPage +
            '\napp.status.currentRoute='+this.status.currentRoute +
            '\napp.status.currentFragsArray='+JSON.stringify(this.status.currentFragsArray) +
            '\napp.status.currentQueryString='+this.status.currentQueryString
        );


        // make sure app.appStatusNowReady() fires once for the start up of this app
        if (!this.appStatusNowReady.started) {
            this.appStatusNowReady.started = true;
            this.appStatusNowReady();
        }


        // broadcast the url change
        grandCentral.trigger('routechange');


        //
        if (pageChanged) {
            this.prePageChange(); //
            view.render();
            view.processRouteChange();
        }else {
            view.processRouteChange();
        }
    }


};

