

var HannibalView = Backbone.View.extend({

    el : '#pagecontainer',

    initialize: function() {
        console.log('hannibalView initialize()');
        this.quizView = new QuizView();
    },

    render: function() {
        console.log('hannibalView render()');

        this.$el.html(htmlpartials.hannibal); // the property after the dot is the filename of the html partial

        // one way is to pass in the selector in which to render the quiz along with the config
        this.quizView.render('.quizcontainer',  SiteConfig.quiz.hannibal);
    },

    processRouteChange : function() {
        console.log('hannibalView processRouteChange()');

    }

});