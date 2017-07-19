$(document).ready(function() {
    $.ajax({
      url: "https://api.gettyimages.com/v3/search/images?phrase=photographer",
      type: 'GET',
      dataType: 'json',
      processData: false,

      // headers: {
      //        'Authorization':'Basic ' + btoa("Api-Key:f75k3vh7v2zjtw985rddrskw"),
      //        'Content-Type':'application/json'
      //  },

      headers: {
             'Api-Key':'f75k3vh7v2zjtw985rddrskw',
       },
      success: function (data) {
        console.log(data);
        $('.bigImg').css('background-image', 'url('+data.images[4].display_sizes[0].uri+')');
      },
      error: function(){
        console.log("Cannot get data");
      }
  });
});
