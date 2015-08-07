

var Firefly_textView = Backbone.View.extend({


    initialize: function() {
        var self= this;
        grandCentral.on('to_ff_text', function(){
            self.addStored( app.status.fireflyPayload );
            self.renderStoredItems();
        });
    },

    setContainer : function(cssselector){
        // assign   this.$el
        var j = $(cssselector);
        if (j.length == 1) this.$el = j;
    },


    // this is the model for this view, along with a setter
    storedItems : [],
    addStored : function(arg){
        this.storedItems.push(arg);
    },



    renderStoredItems : function(){
        if (!this.$el) return;
        this.$el.empty();
        var self = this;
        _.each( this.storedItems, function(value, i){
            var jObj =  $('<div key="' + i + '">'+ value.name + '</div>');
            jObj.click(function(){
                // get the data that is associated with this text
                var key = $(this).attr('key');
                var dataToSend = self.storedItems[key];
                // send the data off
                self.sendPayload(dataToSend);
                // remove the item from stored
                self.storedItems.splice(key,1);
                // re render the panel
                self.renderStoredItems();
            });
            jObj.appendTo(self.$el);
        });
    },



    sendPayload : function( payload ){
        app.status.fireflyPayload = payload;
        grandCentral.trigger('to_ff_images');
    }


});



