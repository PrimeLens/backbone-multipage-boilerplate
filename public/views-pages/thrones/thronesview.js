

var ThronesView = Backbone.View.extend({

    el : '#pagecontainer',

    initialize: function() {
        console.log('thronesView initialize()');
    },

    render: function() {
        console.log('thronesView render()');

        this.$el.html(htmlpartials.thrones);  // the property after the dot is the filename of the html partial
        this.renderSomePanel();
    },

    processRouteChange : function() {
        console.log('thronesView processRouteChange()');
    },


    renderSomePanel : function(){
        var temp = $('<div class="somepanel"></div>');
        temp.append(htmlpartials.thronespanel);
        temp.appendTo(this.$el);
    }

});