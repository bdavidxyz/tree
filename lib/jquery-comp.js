(function($) {
    $.fn.boxify = function(options) {
    
        var defaults = {
            color: "white",
            BackgroundColor: "#556b2f",
            selected: null
        };
        var settings = $.extend({}, defaults, options);
        if (this.length > 1) {
            this.each(function() { $(this).boxify(options) });
            return this;
        }
    
        // private variables
        var privatevar1 = '';
        var privatevar2 = '';
        // private methods
        var myPrivateMethod = function() {
            // do something ...
        }
    

        // public methods 
        this.initialize = function() {
            this.html('\
                <div class="component">\
                    <div class="horizontal" style="display: flex">\
                        <select id="root"></select>\
                        <div class="action action-h">\
                            <button class="and">ET</button>\
                            <button class="or">OU</button>\
                            <button class="bw"><-</button>\
                            <button class="fw">-></button>\
                        </div>\
                    </div>\
                </div>');
            this.find('select').fillValues({datas:window.rules});
            return this;
        };
        this.myPublicMethod = function() {
            // do something ...
        };
        return this.initialize();
    }
})(jQuery);
