
/*global $, window, document, window */





   


  document.getElementById('chat-icon').addEventListener('click', function(e) {
   e.preventDefault();
  
 var chat =  document.getElementById("chat");
 chat.style.display = "block" ;
 chat.style.width = "500px" ;
 chat.style.position = "fixed";
 chat.style.zIndex = "5";
 chat.style.background = "#121a2d" ;
 chat.style.left= "1%" ;  
 chat.style.bottom= "5%" ; 
 chat.style.padding = "0px 0px 14px 0 "
  
  
 

   console.log('hhhhhhhhh')
}, false);


document.getElementById('closeButton').addEventListener('click', function(e) {
   e.preventDefault();
   this.parentNode.style.display = 'none';
   console.log('ffff')
}, false);
