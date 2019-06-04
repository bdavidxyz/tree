(function($) {     
 $.fn.fillValues = function(options) {
   var settings = $.extend({
     datas : null, 
     complete : null,
     selected: null,
   }, options);

   this.each( function(){
     var datas = settings.datas;
     var selected = settings.selected;
     if(datas !=null) {
       $(this).empty();
       for(var key in datas){
         if (selected === datas[key].id) {
           $(this).append('<option value="'+datas[key].id+'" selected="selected">'+datas[key].text+'</option>');
         } else {
           $(this).append('<option value="'+datas[key].id+'">'+datas[key].text+'</option>');
         }
       }
     }
     if($.isFunction(settings.complete)){
       settings.complete.call(this);
     }
   });

 }

}(jQuery));
