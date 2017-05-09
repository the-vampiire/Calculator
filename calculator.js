/**
 * Created by Vampiire on 5/8/17.
 */


var output = $('#output'),
    num,
    func,
    command,
    input = 0;


$(function(){
    output.css('font-size', '1.8em').text('Vampiire Calculator');
});

$('button').click(function(){

    if($(this).attr('id').slice(3).match(/[0-9]/g)){
    // slice 3 to remove prefix 'num' of button ID
        console.log($(this).attr('id').slice(3));
        input += $(this).attr('id').slice(3);
    }
    else{
        func = $(this).attr('id');
    }

    switch(func){
        case 'plus':
            input += '+';
            break;
        case 'minus':
            input += '-';
            break;
        case 'multiply':
             input += '*';
            break;
        case 'divide':
            input += '/';
            break;
        case 'equals':
            evaluate(input);
            break;
        case 'modulus':
            input += '%';
            break;
        case 'delete':
            // function delete last input
            break;
        case 'clear':
            clear();
            break;
    }

    output.html(input);

});


function evaluate(input){
    output.html(eval(input));
}

function clear(){
    // output.html('');
    input = '';
}
