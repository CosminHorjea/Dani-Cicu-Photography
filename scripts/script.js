$(document).ready(function() {
    var image = $(".bigImg");
    var i = 0;
    var images = ['url("http://olindaschool.com.br/conteudo/uploads/2014/10/cameras.jpg")',
        'url("images/background.jpg")',
        'url("http://thevoiceslu.com/wp-content/uploads/2017/02/photography-lens.jpg")',
        'url("http://www.artinstitutevancouver.com/~/media/images/responsive/aiv/digital_media_arts/programme8_1920x1080.ashx")',
        'url("https://static.pexels.com/photos/226243/pexels-photo-226243.jpeg")',

    ];
    var cond = true;
    setInterval(function() {
        if (cond) {
            image.fadeOut('slow', function() {
                image.css('background-image', images[i++]);
                image.fadeIn('slow');
            });
        }
        if (i > images.length - 1) i = 0;

    }, 3500);

    image.mouseenter(function() {
            //  console.log("Enter");
            cond = false;
        })
        .mouseleave(function() {
            //    console.log("leave");
            cond = true;
        });
});