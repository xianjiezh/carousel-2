
function log() {
    return console.log.apply(console, arguments)
}


setTimeout(function () {
    $('.picsWrapper>.pics').children().eq(0).removeClass('toCurrent').addClass('toLeft')
    $('.picsWrapper>.pics').children().eq(1).removeClass('toRight').addClass('toCurrent')
    log('1',$('.picsWrapper>.pics').children().eq(0))
    $('.picsWrapper>.pics').children().eq(0).one('transitionend', function () {
        $('.picsWrapper>.pics').children().eq(0).removeClass('toLeft').addClass('toRight')
    })
}, 2000)
setTimeout(function () {
    $('.picsWrapper>.pics').children().eq(1).removeClass('toCurrent').addClass('toLeft')
    $('.picsWrapper>.pics').children().eq(2).removeClass('toRight').addClass('toCurrent')
    log('2',$('.picsWrapper>.pics').children().eq(0))
    $('.picsWrapper>.pics').children().eq(1).one('transitionend', function () {
        $('.picsWrapper>.pics').children().eq(1).removeClass('toLeft').addClass('toRight')
    })
}, 4000)
setTimeout(function () {
    $('.picsWrapper>.pics').children().eq(2).removeClass('toCurrent').addClass('toLeft')
    $('.picsWrapper>.pics').children().eq(3).removeClass('toRight').addClass('toCurrent')
    log('3',$('.picsWrapper>.pics').children().eq(0))
    $('.picsWrapper>.pics').children().eq(2).one('transitionend', function () {
        $('.picsWrapper>.pics').children().eq(2).removeClass('toLeft').addClass('toRight')
    })
}, 6000)
setTimeout(function () {
    $('.picsWrapper>.pics').children().eq(3).removeClass('toCurrent').addClass('toLeft')
    $('.picsWrapper>.pics').children().eq(0).removeClass('toRight').addClass('toCurrent')
    log('4',$('.picsWrapper>.pics').children().eq(0))
    $('.picsWrapper>.pics').children().eq(3).one('transitionend', function () {
        $('.picsWrapper>.pics').children().eq(3).removeClass('toLeft').addClass('toRight')
    })
}, 8000)