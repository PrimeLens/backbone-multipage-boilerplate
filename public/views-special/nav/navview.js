
var NavView = Backbone.View.extend({

    el : '#navcontainer',

    initialize: function() {
        console.log('navView initialize()');
        this.render();
    },

    render: function() {
        console.log('navView render()');

        this.$el.html(htmlpartials.nav); // the property after the dot is the filename of the html partial

    },


    updateNavActive : function(){
        // if you change the nav html partial - please verify the code below doesn't break
        // navid is the attribute to identify the correct nav item to add a selected state too.
        var tempStr = '[navid="' + app.status.currentPage + '"]';
        //console.log('updating nav active ', tempStr);
        this.$el.find(tempStr).addClass('active').siblings().removeClass('active');
    }


});