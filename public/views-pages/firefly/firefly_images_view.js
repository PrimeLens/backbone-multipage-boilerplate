


var Firefly_imageView = Backbone.View.extend({


    initialize: function() {
        var self= this;
        grandCentral.on('to_ff_images', function(){
            self.mycollection.push( app.status.fireflyPayload );
            self.renderImagesPanel();
        });
    },

    // this is the model for this view
    mycollection : [],

    setContainer : function(cssselector){
        this.$el = $(cssselector);
    },

    renderImagesPanel : function(){
        var self = this;
        self.$el.empty();
        _.each( this.mycollection, function( value, i ){
            var jObj =  $('<img key="' + i + '" src="'+ value.path + '" >');
            jObj.click(function(){
                // get the data that is associated with this text
                var key = $(this).attr('key');
                var dataToSend = self.mycollection[key];
                // send the data off
                app.status.fireflyPayload = dataToSend;
                grandCentral.trigger('to_ff_text');
                // remove the item from stored
                self.mycollection.splice(key,1);
                // re render the panel
                self.renderImagesPanel();
            });
            jObj.appendTo(self.$el);
        });
        self.$el.append('<div style="clear:both; height: 1px;"></div>');

    }

});

