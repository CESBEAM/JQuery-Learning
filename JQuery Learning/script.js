// // Target Element for ID
// var header1 = $('#head1');
// var header2 = $('#head2')

// // Target Element for class
// var class1 = $('.list');

// console.log(class1);

//    var heading = $('h1');
//     console.log(heading);

// $('h1.heading2').hide();

    //selecting the span
    // $('p span').css('color','red');
    // $('.para2 span').css('color','violet')
    // //selecting the italic
    // $('p i').css('color','blue');

    // $('p em').css('background','yellow');

    //selecting li
    // $('#list li:first').css('color','blue');
    // $('#list li:last').css('color','green');

    // //selecting li even and odd
    // $('#list li:odd').css('background','pink')
    // $('#list li:even').css('background','#cccccc')

    // selecting li with nth-child()
    // $('#list li:nth-child(4)').css('list-style','none');

    // $(':submit').hide();

    // $('[href]').css('color','red')

    // $('a[href="https://www.youtube.com/watch?v=1THuqWDsmGQ"]').css('color','violet')

    // $('*').hide();


    //JQuery event
    $(document).ready(function(){
        // $('#btn1').click(function(){
        //     $('.para3').hide();
        // $('#btn1').click(function(){
        //     $('.para3').toggle();
        //     })
        // })

         //event on function
        // $('#btn1').on('click', function(){
        //     $('.para3').hide();
        //     $('#btn1').on('click', function(){
        //         $('.para3').toggle();
        //     })
        // })

        // $('#btn1').dblclick(function(){
        //     $('.para3').toggle();
        // });

        // $('#btn1').hover(function(){
        //     $('.para3').toggle();
        // });

        // $('#btn1').on('mouseenter', function(){
        //     $('.para3').toggle();
        // })
        // $('#btn1').on('mouseleave', function(){
        //     $('.para3').toggle();
        // })

        // $('#btn1').on('mouseenter', function(){
        //     $('.para3').toggle();
        // })

        // $('#btn1').on('mousedown', function(){
        //     $('.para3').toggle();
        // })
        // $('#btn1').on('mouseup', function(){
        //     $('.para3').toggle();
        // })

        // $('#btn1').click(function(e){
        //     // alert(e.currentTarget.className);
        //     // alert(e.currentTarget.innerHTML);
        //     // alert(e.currentTarget.outerHTML);
        // });

        // $(document).on('mousemove', function(e){
        //     $('#coordination').html('Coor Y: '+e.clientY+ 'Coor X: '+e.clientX)
        // });

        // $('#output').html('This is Output');

        // $('input').focus(function(){
        //     // alert('Focus');
        //     $(this).css('background','pink');
            
        // });

        // $('input').blur(function(){
        //     // alert('Focus');
        //     $(this).css('background','white');
            
        // });

        // $('input').keyup(function(e){
        //     console.log(e.target.value)
        // })

        // $('select#gender').change(function(e){
        //     alert(e.target.value);
        // });

        //query style method
        $('#form').submit(function(e){
            e.preventDefault()
            var name = $('input#name').val();
            var email = $('input#email').val();
            console.log("Name: "+name
                       +"\nEmail: "+email);
        })
    });


    //Javascript Traditional Method
//    document.querySelector('#form').addEventListener('submit', fieldForm);

//    function fieldForm(e){
//        e.preventDefault();
//        var name = document.querySelector('#name').value;
//         var email = document.querySelector('#email').value;
//          var gender = document.querySelector('#gender').value; 
//         console.log('Name: '+name+'\nEmail: '+email
//                     +' \nGender: '+gender);
//     }
    
   


    