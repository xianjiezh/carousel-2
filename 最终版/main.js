
function log() {
    return console.log.apply(console, arguments)
}
let len = $('img').length
let n = 0
setInterval(function () {
    n = n % len
    let n1 = getN(n)
    let n2 = getN(n+1)
    $('.picsWrapper>.pics').children().eq(n1).removeClass('toCurrent').addClass('toLeft')
    $('.picsWrapper>.pics').children().eq(n2).removeClass('toRight').addClass('toCurrent')
    $('.picsWrapper>.pics').children().eq(n1).one('transitionend', function () {
        $('.picsWrapper>.pics').children().eq(n1).removeClass('toLeft').addClass('toRight')
    })
    n += 1
}, 2000)

function getN(num) {
    if (num == len) {
        num = 0
    }
    return num
}