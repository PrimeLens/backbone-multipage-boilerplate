

var TruebloodView = Backbone.View.extend({

    el : '#pagecontainer',

    initialize: function() {
        console.log('truebloodView initialize()');
    },

    render: function() {
        console.log('truebloodView render()');

        this.$el.html(htmlpartials.trueblood); // the property after the dot is the filename of the html partial
        this.$el.append(htmlpartials.parentsadvisory);
    },

    processRouteChange : function() {
        console.log('truebloodView processRouteChange()');

    }

});