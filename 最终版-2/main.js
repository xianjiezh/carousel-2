
function log() {
    console.log.apply(console, arguments)
}

let timer = setInterval(slideLeft, 1500)

let n = 1
function slideLeft() {
    let distance = '-' + (n * 168) + 'px'
    if(n <= 4){
        $('.pictures').css({ 'left': distance, transition: 'all .5s' })
    }else if(n == 5){
        $('.pictures').css({ 'left': distance, transition: 'all .5s' })
        $('.pictures').one('transitionend',$('.pictures').css({'left': '-100%'})).offset()
        $('.pictures').css({})
    }
    else{
        $('.pictures').offset()  // 
        $('.pictures').css({ 'left': '-100%', 'transition': 'none'})
        n = 1
    }
    n += 1
}

let $firstCopy = $('.pictures').children().eq(0).clone(true)
$('.pictures').prepend($firstCopy)
let $lastCopy = $('.pictures').children().eq(-1).clone(true)
$('.pictures').append($lastCopy)


