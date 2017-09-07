/* Create BigTabMenu by Lisichkina Jane 10.10.2015 */
 $(document).ready(function () {

     var Tabs = (function () {
         function Tabs(container) {
             this.container = $(container);
             this.controls = $(container).find('.tab-li');
             this.wrappers = $(container).find('.btm-content-block');
             this.init();
         }

         Tabs.prototype.init = function () {
             var self = this;

             $(this.wrappers).each(function (index) {
                 (index == 0) ? $(this).show(): $(this).hide();
             });

               this.controls.on('mouseenter', function () {
                 $(this)
                     .addClass('active')
                     .siblings()
                     .removeClass('active');

                 var i = $(self.controls).index(this);
                 $(self.wrappers).each(function (index) {
                     (index == i) ? $(this).show(): $(this).hide();

                 });

             });

         }
         return Tabs;
     })();
     var tableTabs1 = new Tabs('.btm-li1'); //name container which contains the necessary elements
      var tableTabs2 = new Tabs('.btm-li2'); //name container which contains the necessary elements
      var tableTabs3 = new Tabs('.btm-li3'); //name container which contains the necessary elements
      var tableTabs4 = new Tabs('.btm-li4'); //name container which contains the necessary elements
      var tableTabs5 = new Tabs('.btm-li5'); //name container which contains the necessary elements
      var tableTabs6 = new Tabs('.btm-li6'); //name container which contains the necessary elements
      var tableTabs7 = new Tabs('.btm-li7'); //name container which contains the necessary elements

 });  
    
    
