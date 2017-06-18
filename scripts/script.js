$(document).ready(function() {
  var image = $(".bigImg");
  var photos= ['url("http://www.artinstitutevancouver.com/~/media/images/responsive/aiv/digital_media_arts/programme8_1920x1080.ashx")',"url('https://static.pexels.com/photos/226243/pexels-photo-226243.jpeg')"];


  setInterval(function(){
    image.fadeOut();

    image.css('background-image', photos[Math.floor(Math.random(2))]);
    image.fadeIn('slow');
  },4000)
});
