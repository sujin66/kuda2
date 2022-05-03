$(function(){



    // hamburger navi
    $('.menu-toggle-btn').click(function(){
        $('.gnb').stop().slideToggle('fast');
    });


    // mouseover & out
    $('.promo-list li').addClass('msout');
        $('.promo-list li').hover(function(){
            $(this).addClass('msover');
        }, function(){
            $(this).removeClass('msover');
        });

    // scroll

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.slider').fadeIn(1500);
        }
        if($(this).scrollTop() > 800){
            $('.sec1').fadeIn(1500);
        }
        if($(this).scrollTop() > 1500){
            $('sec2').fadeIn(1000);
        }
        if($(this).scrollTop() > 2900){
            $('.sec3').fadeIn(1500);
        }
        if($(this).scrollTop() > 3000){
            $('.sec4').fadeIn(1500);
        }
        if($(this).scrollTop() > 3000){
            $('footer').fadeIn(1500);
        }
    });

    

});//ready end
