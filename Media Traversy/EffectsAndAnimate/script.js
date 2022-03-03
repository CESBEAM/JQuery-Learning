// button slide
$(document).ready(function(){
    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(3000, function(){
            $('#btnFadeOut').text('Its Gone')
        });
    });

    $('#btnFadeIn').click(function(){
        $('#box').fadeIn();
    });

    $('#btnFadeTog').click(function(){
        $('#box').toggle('slow', function(){
            $('#btnFadeTog').text('Show')
        });
    });


    //button Slides
    $('#btnSlideUp').click(function(){
        $('p.paraClass1').slideUp(500);
    })

    $('#btnSlideDown').click(function(){
        $('p.paraClass1').slideDown(500);
    });

    $('#btnSlideTog').click(function(){
        $('p.paraClass2').slideToggle(500);
    });


    // button moves Animation
    $('#moveRight').click(function(){
        $('#box2').animate({
            left:500,
            height:'400px',
            opacity: '0.5'
        });
    });

    $('#moveLeft').click(function(){
        $('#box2').animate({
            left:0,
            height: '100px',
            width: '100px',
            opacity: '1'
        });
    });

    $('#moveAround').click(function(){
        var box = $('#box2');
        box.animate({
            left: 300
        });  
        box.animate({
            top: 300
        });
        box.animate({
            left:0,
            top: 300
        });
        box.animate({
            left: 0,
            top: 0
        });
    })
});
