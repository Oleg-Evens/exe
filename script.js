$('#circle1').circleProgress({
    value: 0.76,
    size: 130,
    startAngle: 4.7,
    fill: {
    gradient: ["red", "yellow"]
   }
});
$('#circle2').circleProgress({
    value: 0.33,
    size: 130,
    startAngle: 4.7,
    fill: {
    gradient: ["red", "yellow"]
   }
});
$('#circle3').circleProgress({
    value: 0.60,
    size: 130,
    startAngle: 4.7,
    fill: {
    gradient: ["red", "yellow"]
   }
});
$('#circle4').circleProgress({
    value: 0.25,
    size: 130,
    startAngle: 4.7,
    fill: {
    gradient: ["red", "yellow"]
   }
});
$('#headingOne').click(function(){
    $('.card1 .ch-square').toggleClass('change-arrow-exception');
    $('#headingOne').toggleClass('change-bg-exception');
    $('.url-1').toggleClass('change-color-exception');
    $('#headingTwo').removeClass('change-bg');
    $('.url-2').removeClass('change-color');
    $('#headingThree').removeClass('change-bg');
    $('.url-3').removeClass('change-color');
    $('#headingFour').removeClass('change-bg');
    $('.url-4').removeClass('change-color');
    for(var i = 2; i < 5; i++) {
        if($('.card'+ i +' .ch-square').hasClass('change-arrow')) {
        $('.card'+ i +' .ch-square').toggleClass('change-arrow');
        };
    }
});
$('#headingTwo').click(function(){
    $('.card2 .ch-square').toggleClass('change-arrow');
    $('#headingTwo').toggleClass('change-bg');
    $('.url-2').toggleClass('change-color');
    if($('#headingOne').hasClass('change-bg-exception')) {

    } else {
        $('#headingOne').toggleClass('change-bg-exception')
        $('.url-1').toggleClass('change-color-exception');
    }
    $('#headingThree').removeClass('change-bg');
    $('.url-3').removeClass('change-color');
    $('#headingFour').removeClass('change-bg');
    $('.url-4').removeClass('change-color');
    if($('.card'+ 1 +' .ch-square').hasClass('change-arrow-exception')) {
        
    } else {
        $('.card'+ 1 +' .ch-square').toggleClass('change-arrow-exception');
    }
    for(var i = 1; i < 5; i++) {
        if($('.card'+ i +' .ch-square').hasClass('change-arrow')) {
            if(i == 1) {
                
            } else {
                $('.card'+ i +' .ch-square').toggleClass('change-arrow');
            }
            if(i == 2) {
                $('.card'+ 2 +' .ch-square').toggleClass('change-arrow');
            }
        };
    }
});
$('#headingThree').click(function(){
    $('.card3 .ch-square').toggleClass('change-arrow');
    $('#headingThree').toggleClass('change-bg');
    $('.url-3').toggleClass('change-color');
    if($('#headingOne').hasClass('change-bg-exception')) {

    } else {
        $('#headingOne').toggleClass('change-bg-exception')
        $('.url-1').toggleClass('change-color-exception');
    }
    $('#headingTwo').removeClass('change-bg');
    $('.url-2').removeClass('change-color');
    $('#headingFour').removeClass('change-bg');
        $('.url-4').removeClass('change-color');  
    if($('.card'+ 1 +' .ch-square').hasClass('change-arrow-exception')) {
        
    } else {
        $('.card'+ 1 +' .ch-square').toggleClass('change-arrow-exception');
    }
    for(var i = 1; i < 5; i++) {
        if($('.card'+ i +' .ch-square').hasClass('change-arrow')) {
            if(i == 1) {
                
            } else {
                $('.card'+ i +' .ch-square').toggleClass('change-arrow');
            }
            if(i == 3) {
                $('.card'+ 3 +' .ch-square').toggleClass('change-arrow');
            }
        };
    }  
    });
$('#headingFour').click(function(){
    $('.card4 .ch-square').toggleClass('change-arrow');
    $('#headingFour').toggleClass('change-bg');
    $('.url-4').toggleClass('change-color');
    if($('#headingOne').hasClass('change-bg-exception')) {

    } else {
        $('#headingOne').toggleClass('change-bg-exception')
        $('.url-1').toggleClass('change-color-exception');
    }
    $('#headingTwo').removeClass('change-bg');
    $('.url-2').removeClass('change-color');
    $('#headingThree').removeClass('change-bg');
    $('.url-3').removeClass('change-color');
    if($('.card'+ 1 +' .ch-square').hasClass('change-arrow-exception')) {
        
    } else {
        $('.card'+ 1 +' .ch-square').toggleClass('change-arrow-exception');
    }
    for(var i = 1; i < 5; i++) {
        if($('.card'+ i +' .ch-square').hasClass('change-arrow')) {
            if(i == 1) {
                
            } else {
                $('.card'+ i +' .ch-square').toggleClass('change-arrow');
            }
            if(i == 4) {
                $('.card'+ 4 +' .ch-square').toggleClass('change-arrow');
            }
        };
    }
});

