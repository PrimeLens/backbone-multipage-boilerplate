

var FireflyView = Backbone.View.extend({

    el : '#pagecontainer',

    // lets pretend we received some data but for now lets hardcode it here
    config : [
        {
            path : assetsDirectory + 'images/fireflypage/firefly-reaver.jpg',
            name : 'Ghoulish Reaver Ships, attacking a village'
        },
        {
            path : assetsDirectory + 'images/fireflypage/firefly-spacestation.jpg',
            name : 'Niska\'s Skyplex Spacestation, orbiting Ezra'
        },
        {
            path : assetsDirectory + 'images/fireflypage/firefly.jpg',
            name : 'Serenity, Firefly class spaceship'
        }
    ],

    initialize: function() {
        console.log('fireflyView initialize()');

        // also instanciate the views stored in firefly_extrastuff.js
        this.firefly_textView = new Firefly_textView();
        this.firefly_imageView = new Firefly_imageView();

        // now use setter function to populate one of them
        var self=this;
        _.each(this.config, function(val, i){
            self.firefly_textView.addStored(val);
        });

    },

    render: function() {
        console.log('fireflyView render()');

        this.$el.html(htmlpartials.firefly);

        this.firefly_textView.setContainer('.container.one');
        this.firefly_textView.renderStoredItems();

        this.firefly_imageView.setContainer('.container.two');
        this.firefly_imageView.renderImagesPanel();
    },


    processRouteChange : function() {
        //
    }

});