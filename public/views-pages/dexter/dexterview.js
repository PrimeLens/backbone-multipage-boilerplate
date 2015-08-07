

var DexterView = Backbone.View.extend({

    el : '#pagecontainer',

    initialize: function() {
        console.log('dexterView initialize()');
    },

    render: function() {
        console.log('dexterView render()');

        this.$el.html(htmlpartials.dexter); // the property after the dot is the filename of the html partial
        this.$el.append(htmlpartials.parentsadvisory);
    },

    processRouteChange : function() {
        console.log('dexterView processRouteChange()');

    }

});