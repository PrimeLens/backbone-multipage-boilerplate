

var HomeView = Backbone.View.extend({

    el : '#pagecontainer',

    initialize: function() {
        console.log('homeView initialize()');
    },

    render: function() {
        console.log('homeView render()');

        this.$el.html(htmlpartials.home); // the property after the dot is the filename of the html partial
    },

    processRouteChange : function() {
        console.log('homeView processRouteChange()');

    }

});