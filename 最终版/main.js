
function log() {
    return console.log.apply(console, arguments)
}
let arr = [".toLeft",".toCurrent", ".toRight"]
let n = 0
let timer = setInterval(function () {
    moveLeft(n)
    n += 1
}, 5500)

let len = $('img').length
function getN(num) {
    if (num == len) {
        num = 0
    }
    return num
}

// 图片右移
function moveLeft(n) {
    n = n % len
    let n1 = getN(n)
    let n2 = getN(n + 1)
    $('.picsWrapper>.pics').children().eq(n1).removeClass('toCurrent').addClass('toLeft')
    $('.picsWrapper>.pics').children().eq(n2).removeClass('toRight').addClass('toCurrent')
    $('.picsWrapper>.pics').children().eq(n1).one('transitionend', function () {
        $('.picsWrapper>.pics').children().eq(n1).removeClass('toLeft').addClass('toRight')
    })
}
function moveRight(n) {
    n = n % len
    let n1 = getN(n)
    let n2 = getN(n + 1)
    let current = $('img.toCurrent')
    /*想了好几天，这个思路下是不能做到右移的，要崩溃了*/
    
}
$('.left').on('click', function () {
    moveLeft(n)
    n += 1
})
$('.right').on('click', function () {
    moveRight(n)
    n -= 1
})