// JavaScript Document for Eventus

$(document).ready(function(){

  var options = {
    center: new google.maps.LatLng(-31.39893,-64.18213),
    zoom: 14,
    mapTypeId: "terrain",
    scrollwheel: false,
    mapTypeControlOptions: {
        mapTypeIds: ["Toner", "Terrain", "Watercolor"]
    }
  };
  var map = new google.maps.Map(document.getElementById("map"), options);
  map.mapTypes.set("terrain", new google.maps.StamenMapType("toner"));
  var myMarker = false;
	point = new google.maps.LatLng(-31.39893,-64.18213);
	var marker = new google.maps.Marker({
				position: point,
				title:'Test',
				animation: google.maps.Animation.DROP,
				map: map
	});
	var placeInfo = '<div class="pinContent"><p>Hotel Felipe II, San Jerónimo 279, Cordoba</p><p><a href="http://goo.gl/maps/qKvXU" target="_blank">Abrir en Google Maps &raquo;</a></p></div>';
	var placeWindow = new google.maps.InfoWindow({
	  	content: placeInfo
	});
	google.maps.event.addListener(marker, 'click', function() {
			placeWindow.open(map,marker);
	});

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



