



// 메인 파트별 호버시 scale
$('#main .depth1 .ani').on('mouseover',function(){
    $(this).addClass('big')
    $(this).css({transition:'all 0.5s'})
    // $(this).parent().css({translate:'all 1s'})
})
$('#main .depth1 .ani').on('mouseout',function(){
    $(this).removeClass('big')
});

$('#main .depth1 .ac').on('mouseover mouseout',function(){
    $(this).toggleClass('active')
});

$('#main .depth1 .content4 .box3> i').on('click',function(){
    $('#main .depth1 .content4 .box3').toggleClass('on')
    if($(this).hasClass('fa-plus')){
        $(this).addClass('fa-minus').removeClass('fa-plus')
    } else{ $(this).addClass('fa-plus').removeClass('fa-minus')
    }
})

$('#main .depth1 .content4 .box3 .sns i').on('mouseover mouseout',function(){
    $(this).toggleClass('on')
})

$('#main .depth1 .content2 .box4').on('click',function(){
    $('#main .searchbox').toggleClass('on')
    
})


//슬라이드

$('#main .slideInner').slick({
    autoplay: true,
    arrows:false,
    
})