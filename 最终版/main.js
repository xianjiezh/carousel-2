
$('.picsWrapper>.pics').children().eq(0).addClass('toCurrent')
$('.picsWrapper>.pics').children().eq(1).addClass('toRight')
$('.picsWrapper>.pics').children().eq(2).addClass('toRight')
$('.picsWrapper>.pics').children().eq(3).addClass('toRight')
log($('.picsWrapper>.pics').children().eq(3))
function log(){
    return console.log.apply(console,arguments)
}


setInterval(function(){
    setTimeout(function(){
        $('.picsWrapper>.pics').children().eq(0).removeClass('toCurrent').addClass('toLeft')
        $('.picsWrapper>.pics').children().eq(0).on('transitionend',function(){
            $('.picsWrapper>.pics').children().eq(0).removeClass('toLeft').addClass('toRight')
        })
        $('.picsWrapper>.pics').children().eq(1).removeClass('toRight').addClass('toCurrent')
    },2000)
    setTimeout(function(){
        $('.picsWrapper>.pics').children().eq(1).removeClass('toCurrent').addClass('toLeft')
        $('.picsWrapper>.pics').children().eq(1).on('transitionend',function(){
            $('.picsWrapper>.pics').children().eq(1).removeClass('toLeft').addClass('toRight')
        })
        $('.picsWrapper>.pics').children().eq(2).removeClass('toRight').addClass('toCurrent')
    },4000)
    setTimeout(function(){
        $('.picsWrapper>.pics').children().eq(2).removeClass('toCurrent').addClass('toLeft')
        $('.picsWrapper>.pics').children().eq(2).on('transitionend',function(){
            $('.picsWrapper>.pics').children().eq(2).removeClass('toLeft').addClass('toRight')
        })
        $('.picsWrapper>.pics').children().eq(3).removeClass('toRight').addClass('toCurrent')
    },6000)
    setTimeout(function(){
        $('.picsWrapper>.pics').children().eq(3).removeClass('toCurrent').addClass('toLeft')
        $('.picsWrapper>.pics').children().eq(3).on('transitionend',function(){
            $('.picsWrapper>.pics').children().eq(3).removeClass('toLeft').addClass('toRight')
        })
        $('.picsWrapper>.pics').children().eq(0).removeClass('toRight').addClass('toCurrent')
    },8000)
},8000)


