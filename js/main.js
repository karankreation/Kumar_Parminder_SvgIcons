
 $(document).ready(function(){

   $surface = $('.surface')
   $truck = $('.truck')
   $img = $('.truck img');
   let flag = true;

   const trucks = ['images/truck.svg','images/headlights.svg'];

 $(document).on('keypress', function(e){

   //keycode for enter key is 13

   if(e.which == 13) {
     $($surface).toggleClass('moveRight');
     $($truck).toggleClass('suspension');
   }


 })

 $(document).on('keypress', function(e){

   //keycode for W key is 119
   if(e.which == 119){
     if(flag){
       flag = false;
       $img.attr('src',trucks[0]);
     }else{
       flag = true;
       $img.attr('src',trucks[1]);
     }
   }
})
});



 const text = document.querySelector(".textdesign");
 const strText = text.textContent;

 const splitText = strText.split("");
 text.textContent = "";
 for(let i=0; i < splitText.length; i++) {
   text.innerHTML +=  "<span>"+ splitText[i] + "</span>";
 }

 let char = 0;
 let timer = setInterval(onTick, 50);

 function onTick(){
   const span = text.querySelectorAll('span')[char];
   span.classList.add('fade');
   char++
   if (char === splitText.length) {
     complete();
     return;
   }
 }

  function complete(){
    clearInterval(timer);
    timer = null;
  }
