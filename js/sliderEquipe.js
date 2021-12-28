$(function(){
    initSlider();
    autoPlay();
    cliqueSlider();

    var iAtual = 0;
    var amt;

    function initSlider(){
        amt = $('.membro').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('.membro').css('width',sizeBoxSingle+'%');
        $('.scrollWrapper').css('width',sizeContainer+'%');

        for(i = 0; i < amt; i++){
            if(i == 0){
                $('.slider').append('<span style="background-color:black;"></span>');
            }else{
                $('.slider').append('<span></span>');
            }
        }
    }

    function autoPlay(){
        setInterval(function(){
            iAtual++;
            if(iAtual == amt){
                iAtual = 0;
            }
            goToSlider(iAtual);
        },5000);
    }

    function goToSlider(iAtual){
        var offSetX = $('.membro').eq(iAtual).offset().left - $('.scrollWrapper').offset().left;
        $('.slider span').css('background-color','rgb(121, 121, 121)');
        $('.slider span').eq(iAtual).css('background-color','black');
        $('.scrollEquipe').stop().animate({'scrollLeft':offSetX});
    }

    /*
    function cliqueSlider(){
        $('.slider span').click(function(){
            iAtual = $(this).index();
            var offSetX = $('.membro').eq(iAtual).offset().left;
            $('.scrollEquipe').stop().animate({'scrollLeft':offSetX});
            $('.slider span').css('background-color','rgb(121, 121, 121)')
            $(this).css('background-color','black')
        });
    }
    */

    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft':0});
    })

})