$(document).ready(function(){

    $("#hello1").hide();
    $('.up-arrow').hide();
    $('.up-arrow1').hide();

    $(".slide-section").click(function(e){
       
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - 50
        }, 1000);
        e.preventDefault();
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 400 && $("#hello").is(':hidden')) {
            $('.up-arrow1').fadeIn(500);
        }
        if($(window).scrollTop() > 400 && $("#hello1").is(':hidden')) {
            $('.up-arrow').fadeIn(500);
        }
        if($(window).scrollTop() < 400) {
            $('.up-arrow1').fadeOut(500);
            $('.up-arrow').fadeOut(500);
        }
    });

    $(".bulb").click(function(){
        $("#hello").hide();
        $("#hello1").show(); 

    });
    
    $(".bulb1").click(function(){
        $("#hello").show();
        $("#hello1").hide(); 
    });


    $(".errors").animate({top: '200px'});
    $('.errors').delay(3000).fadeOut('1000');

    $(".success").animate({top: '200px'});
    $('.success').delay(1000).fadeOut('1000');

    $(".errors").addClass('ahashakeheartache');
    $('.errors').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
            $('form').delay(200).removeClass('ahashakeheartache');
          });

});