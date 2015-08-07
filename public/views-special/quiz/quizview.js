
var QuizView = Backbone.View.extend({

    initialize: function() {
        console.log('quizView initialize()');
        //  no need to render this on init
    },

    render: function( cssselector, config) {
        console.log('quizView render()');

        // you don't have to do it this way but I decided to pass in the css id of container and the config
        this.$el = $(cssselector);
        if (this.$el.length != 1) {
            console.log('should only have one container for the quiz');
            return;
        }
        // just to be sure, empty it
        this.$el.empty();

        // stick the header in there
        this.$el.append(htmlpartials['quizheader']);
        this.$el.find('.quiztitle').append( config.quiztitle );

        // store the config in this instance for later use
        this.config = config;

        // add another container to hold the options and store the jQuery pointer to it
        this.$elOptions = $('<div class="options"></div>').appendTo(this.$el);

        // add a reset button
        $('<div class="resetquizbtn">Uncheck All</div>').appendTo(this.$el).click(function(){
            $('INPUT[type="checkbox"]').attr('checked', false);
        });

        // add a submit button
        $('<div class="submitquizbtn">Submit</div>').appendTo(this.$el).click(function(){
            alert('submitted');
        });


        this.resetTheQuiz();

    },


    resetTheQuiz : function(){
        this.$elOptions.empty();
        var self = this;
        _.each(this.config.options, function(value, i){
            console.log(value);
            var temp = $(htmlpartials.quizitem);
            temp.find('span').append(value);
            $('<input type="checkbox" name="check_'+ i +'" />').prependTo(temp).click(function(){
                // do something if need be
            });
            self.$elOptions.append(temp);
        });

        // the rest of this quiz is up to you the developer
    }

});