

// ROUTER INITIALIZE

routerSetupConfig.initialize = function() {
    console.log('router initialize()');
    this.status.currentPage = this.status.lastPage = this.status.currentRoute = null;

    // the following views will self render on init
    this.headerView = new HeaderView();
    this.navView = new NavView();
    this.loaderView = new LoaderView();


    // the following views are pages and will only render on a route
    this.homeView = new HomeView();
    this.thronesView = new ThronesView();
    this.walkingView = new WalkingView();
    this.dexterView = new DexterView();
    this.truebloodView = new TruebloodView();
    this.hannibalView = new HannibalView();
    this.breakingbadView = new BreakingbadView();
    this.fireflyView = new FireflyView();
    this.madmaxView = new MadmaxView();


};




// ROUTER ROUTES

routerSetupConfig.routes =  {
    '(?*path)': function(f, q){ this.routeTunnel('home', this.homeView, f, q) },

    'gameofthrones(/*path)': function(f, q){ this.routeTunnel('gameofthrones', this.thronesView, f, q) },
    'walkingdead(/*path)': function(f, q){ this.routeTunnel('walkingdead', this.walkingView, f, q) },
    'trueblood(/*path)': function(f, q){ this.routeTunnel('trueblood', this.truebloodView, f, q) },
    'dexter(/*path)': function(f, q){ this.routeTunnel('dexter', this.dexterView, f, q) },
    // an explanation. using dexter route for this example you can see key : value pairs
    // where the key is 'dexter(/*path)' and the value is a function
    // in the key 'dexter(/*path)', the appearance of the string dexter is regex applied to the url
    // inside the function we must also pass a string 'dexter through, this ultimately gets stored in
    // app.status.currentpage and is used to find the correct nav item to highlight
    // finally we must also pass the pointer to the instance of the page view
    // f argument is fragment,  q argument is query string
    'hannibal(/*path)': function(f, q){ this.routeTunnel('hannibal', this.hannibalView, f, q) },
    'breakingbad(/*path)': function(f, q){ this.routeTunnel('breakingbad', this.breakingbadView, f, q) },
    'firefly(/*path)': function(f, q){ this.routeTunnel('firefly', this.fireflyView, f, q) },
    'madmax(/*path)': function(f, q){ this.routeTunnel('madmax', this.madmaxView, f, q) },



    '*badroute': function(){ this.navigate('#', {trigger: true}); }
    // for more information on routing try reading http://mrbool.com/backbone-js-router/28001
};






// ROUTER pre

routerSetupConfig.prePageChange =  function(){
    console.log('prePageChange()');

    // any code that must happen before every page change ... place here

};





//  Because all the initialize()  functions occur very early before app.status has values like currentPage
//  we need a function to fire once during the start up and after app.status has populated

routerSetupConfig.appStatusNowReady =  function(){



};


