

var BreakingbadView = Backbone.View.extend({

    el : '#pagecontainer',

    initialize: function() {
        console.log('breakingbadView initialize()');
        this.quizView = new QuizView();
    },

    render: function() {
        console.log('breakingbadView render()');

        this.$el.html(htmlpartials.breakingbad); // the property after the dot is the filename of the html partial

        // one way is to pass in the selector in which to render the quiz along with the config
        this.quizView.render('.panel',  SiteConfig.quiz.breakingbad );
    },

    processRouteChange : function() {
        console.log('breakingbadView processRouteChange()');

    }

});