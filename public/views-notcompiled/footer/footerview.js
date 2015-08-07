

var FooterView = Backbone.View.extend({

    el : '#footercontainer',

    initialize: function() {
        console.log('footerView initialize()');
        this.render();
    },

    render: function() {
        console.log('footerView render()');
        this.$el.html(htmlpartials.footer);
    }

});