
/*
example usage


 app.loaderView.start('pageload');
 app.loaderView.start('loadmypanel');

 app.loaderView.end("pageload");
 app.loaderView.end('loadmypanel');

 ... and only when the stack is empty will it disappear

*/

var LoaderView = Backbone.View.extend({

    el : '#loadercontainer',
    $handle : null,

    initialize: function() {
        this.render();
        this.$handle = this.$el.find('#loader');
        this.stack = [];
    },
    render: function() {
        this.$el.html(htmlpartials.loader);
    },
    start:function(desc) {
        if($.inArray(desc,this.stack)==-1){
            this.stack.push(desc);
            this.$handle.show();
            console.log("loader.start(" + desc + ")");
        }
    },
    end:function (desc) {
        var i = $.inArray(desc, this.stack);
        if(i>-1){
            this.stack.splice(i,1);
            console.log("LoadingDisplay.end(" + desc + ")");
        }
        if(this.stack.length==0){
            this.$handle.hide();
        }
    },
    reset:function() {
        this.stack = [];
        this.$handle.hide();
    }

});

