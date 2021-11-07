/*global $, jQuery, alert, window, document*/

        $(document).ready(function () {
    "use strict";
            
    $("html").niceScroll();
    $('.carousel').carousel({
        interval: 2000
    });

            //Show color option div when  click on the gear 
    $(".gear-check").click(function () {

        $('.color-option').fadeToggle();
            }) ;

      

//chang theme color on click
var colorLi =  $('.color-option ul li '),
    scrollButton = $("#scroll-top");

colorLi 
.eq(0).css("backgroundColor" , "darkred").end()  //we can color this with css first child...
.eq(1).css("backgroundColor" , "green").end()
.eq(2).css("backgroundColor" , "purple").end()
.eq(3).css("backgroundColor" , "orange").end()
.eq(4).css("backgroundColor" , "blue");

        
        
        colorLi.click(function () {
            $("link[href*='theme']").attr("href",$(this).attr("data-value"));
            

           }) ;
            
            //Caching The Scroll Top 
            
            $(window).scroll(function (){
                
                $(this).scrollTop() >=700 ?   scrollButton.show() : scrollButton.hide();
                
                 
                
                scrollButton.click( function (){
                   
                    $("html,body").animate({ scrollTop : 0 } , 600);
                });
            });
        
        });

///***************************
//loading screen

            $(window).load( function (){
                 "use strict";
               $(".loading-overlay  .sk-folding-cube").fadeOut(1000, function(){
                   $("body").css("overflow" , "auto");
                   $(this).parent().fadeOut(2000,
                        function(){
                       $(this).remove();
                       
                   });
               });  
                   });

//*********************************************


