// Target Element for ID
var header1 = $('#head1');
var header2 = $('#head2')

// Target Element for class
var class1 = $('.list');

console.log(class1);

   var heading = $('h1');
    console.log(heading);

$('h1.heading2').hide();

    //selecting the span
    $('p span').css('color','red');
    $('.para2 span').css('color','violet')
    //selecting the italic
    $('p i').css('color','blue');

    $('p em').css('background','yellow');

    //selecting li
    $('#list li:first').css('color','blue');
    $('#list li:last').css('color','green');

    //selecting li even and odd
    $('#list li:odd').css('background','pink')
    $('#list li:even').css('background','#cccccc')

    //selecting li with nth-child()
    $('#list li:nth-child(4)').css('list-style','none');

    $(':submit').hide();

    $('[href]').css('color','red')

    $('a[href="https://www.youtube.com/watch?v=1THuqWDsmGQ"]').css('color','violet')

    $('*').hide();




    