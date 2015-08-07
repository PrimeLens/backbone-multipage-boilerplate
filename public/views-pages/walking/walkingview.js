

var WalkingView = Backbone.View.extend({

    el : '#pagecontainer',

    initialize: function() {
        console.log('walkingView initialize()');

    },

    render: function() {
        console.log('walkingView render()');

        this.$el.html(htmlpartials.walking); // the property after the dot is the filename of the html partial
/*
        // bind event handler for the character buttons and have them link to a deeplink
        this.$el.find('.linkitem').on('click', function(){
            window.location.replace( $(this).attr('dest') );
        });
        */

    },

    processRouteChange : function() {
        console.log('walkingView processRouteChange()');

        // inject the correct data from config based on deeplink
        var key = app.status.currentFragsArray[0];

        if (key) {
            var data = SiteConfig.walking[ key ];
            this.$el.find('.panel').html('<img src="' + data.path + '">');
        } else {
            this.$el.find('.panel').html('<p>Click a button above to see a character. Watch the URL change. Then use the back button to go back through your sequence.</p>');
        }

    }



});