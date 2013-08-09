// JavaScript Document for Eventus

$(document).ready(function(){

//Nivo slider
$('#slider').nivoSlider({
        effect:'fade', // Specify sets like: 'fold,fade,sliceDown' or choose 'random' for mixed effects
        slices:15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed:500, // Slide transition speed
        pauseTime:3000, // How long each slide will show
    pauseOnHover:true,
       directionNav:true, // Next & Prev navigation
        directionNavHide:true, // Only show on hover
        controlNav:false // 1,2,3... navigation
  
});

//On Hover Event for gallery, social
$('ul.gallery li img, ul.social li img').hover(function(){
      $(this).animate({opacity: 0.6}, 300);
    }, function () {
      $(this).animate({opacity: 1}, 300);
});


}); // close document.ready



