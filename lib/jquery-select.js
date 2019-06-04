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
                $(this).append('<option value="'+key+'"+>'+datas[key]+'</option>');
            }
        }
        if($.isFunction(settings.complete)){
            settings.complete.call(this);
        }
    });

   }

}(jQuery));
