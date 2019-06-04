(function($) {     
   $.fn.fillValues = function(options) {
       var settings = $.extend({
           datas : null, 
           complete : null,
       }, options);

       this.each( function(){
        var datas = settings.datas;
        if(datas !=null) {
            $(this).empty();
            for(var key in datas){
                console.log(datas[key])
                $(this).append('<option value="'+datas[key].id+'">'+datas[key].text+'</option>');
            }
        }
        if($.isFunction(settings.complete)){
            settings.complete.call(this);
        }
    });

   }

}(jQuery));
