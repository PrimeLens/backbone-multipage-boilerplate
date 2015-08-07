

var HeaderView = Backbone.View.extend({

    el : '#headercontainer',

    initialize: function() {
        console.log('headerView initialize()');
        this.render();
    },

    render: function() {
        console.log('headerView render()');

        this.$el.html(htmlpartials.header); // the property after the dot is the filename of the html partial

    }

});