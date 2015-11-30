
$(function(){


    $(window).resize(function(){

        var window_w = $(window).width();
        console.log(window_w)
        if(window_w > 769){
            $('.btn-menu').css('display','none');
        }else if(window_w <= 769){
            $('.Close').css('display','none');
            $('.Main').css('display','block');
        }


    })

    $('.Main').click(function(){
        $('#mainmenu').css('display','block');
        $('.Close').css('display','block');
    })

    $('.Close').click(function(){
        $('#mainmenu').css('display','none');
        $('.Close').css('display','none');
        $('.Main').css('display','block');
    })
})
