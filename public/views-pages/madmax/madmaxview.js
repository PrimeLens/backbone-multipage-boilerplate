

var MadmaxView = Backbone.View.extend({

    el : '#pagecontainer',

    initialize: function() {
        console.log('madmaxView initialize()');
    },

    render: function() {
        console.log('madmaxView render()');
        var self = this;

        /*  (1) Show the loader (2) preload the images,  (3) hide the loader,  (4) render the page */


        // show the loader
        app.loaderView.start('pageload');


        // preload the images
        // here is a way to scan thru the html and build an array of the images to be preloaded
        BBPreload.reset();
        $(htmlpartials.madmax).find('img').each(function(){
            BBPreload.add(   $(this).attr('src')  );
        });
        BBPreload.start(function() {
            // hide the loader
            app.loaderView.end("pageload");
            // render the page
            self.$el.html(htmlpartials.madmax);
        });
    },

    processRouteChange : function() {
        console.log('madmaxView processRouteChange()');

    }

});