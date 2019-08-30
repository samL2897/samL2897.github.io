$(document).ready (function(){
    console.log("Hello World");

    $('.research-item').click(function(){
   	    $(this).toggleClass('large');
   });

   $('.nav-item').click(function(){
   	   $('.nav-item').removeClass('active');
   	   $(this).addClass('active');
   });

   var hideAll = function() {
       $('.research-item').addClass('hide');
   }

   $('.btn-car').click(function(){
   	   hideAll();
   	   $('.car').removeClass('hide');
   })
   
   $('.btn-kincet').click(function(){
   	   hideAll();
   	   $('.kincet').removeClass('hide');
   })

   $('.btn-tracking').click(function(){
   	   hideAll();
   	   $('.tracking').removeClass('hide');
   })



});