
$(document).ready(function(){
    // $('#heading1').css('color','green');
    // $('#heading1').css({color:'green',background:'black'});

    // $('.headingClass2').css({color:'blue', background: 'yellow'})

    // add class and we can manipulate the document with DOM and add css
    // $('p.paraClass2').addClass('newClass');
    // $('p.paraClass2').removeClass('forClass');

//     // button click function with toggle animate fade
    // $('button#sampleBtn').click(function(){
    //     $('p.paraClass2').toggle('.paraClass2');
    // });

    // $('button#sampleBtn').click(function(){
    //     $('p.paraClass2').toggleClass('forClass')
    // })

//     // we can simple manipulate the text
    // $('.hello').text('Hello World');
    
//     // if we want HTML element, just like innerHTML
    // $('.hello').html('<h1>Hello World</h1>');
    // alert($('.hello').text())

//     // append add to last
    // $('ul').append('<li>List Items 8</li>')

//     //prepend add to start/beginning
    // $('ul').prepend('<li>List Items 0</li>')

//     //appendTo, they change or swap position
    // $('.paraClass1').appendTo('.paraClass2');

//     //prepend is to reverse if appendTo exist
    // $('.paraClass1').prependTo('.paraClass2');

//     // before()
    // $('ul').before('<h1><br/>This is before() function</h1><br/>');
    

//     // after()
    // $('ul').after('<br/><h1>This is after() function</h1><br/>')

//     // empty
    // $('ul').empty();
    // $('#heading1').empty();
    
//     $('ul').detach();

//     $('a').attr('target', '_blank');
//     alert($('a').attr('href'));
//     $('a').removeAttr('target');

//     // wrap all h1
    // $('p').wrap('<h4>');
    // $('p').wrapAll('<h1>');

//    $('#form').submit(function(e){
//        e.preventDefault()
//        var name = $('#name').val();
//        $('ul').append('<li>'+name+'</li>');
//    })
    
//    array append list
   var myArr = ['colby','sonny','smosh'];

   $.each(myArr, function(i, val){
       $('.arrayList').append('<li>'+val+'</li>')
   })

// //array InnerHtml
//    var newArr = $('ul#list li').toArray();
//    $.each(newArr, function(i,val){
//       console.log(val.innerHTML);
//    })

});