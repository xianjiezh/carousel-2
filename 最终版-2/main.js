
function log() {
    console.log.apply(console, arguments)
}

let timer = setInterval(slideLeft, 1500)

let n = 1
function slideLeft() {
    let distance = '-' + (n * 168) + 'px'
    if(n <= 4){
        $('.pictures').css({ 'left': distance, transition: 'all .5s' })
        n += 1
    }else if(n == 5){
        $('.pictures').offset()  // 
        $('.pictures').css({ 'left': '0', 'transition': 'none'})
        n = 1
    }
    
}
function slideRight(){
    let left = $('.pictures').offset().left
    log(left)
    let distance = -left + 168 +'px'
    if(n > 1){
        $('.pictures').css({ 'left': distance, transition: 'all .5s' })
        n -= 1
    } else{
        $('.pictures').offset()  // 
        $('.pictures').css({ 'left': '-840px', 'transition': 'none'})
        n = 1
    }
}
let $firstCopy = $('.pictures').children().eq(0).clone(true)
log($('.pictures').children().length)
let $lastCopy = $('.pictures').children().eq($('.pictures').children().length - 1).clone(true)
$('.pictures').append($firstCopy)
$('.pictures').prepend($lastCopy)

$('.pictures').on('mouseenter',function(){
    clearInterval(timer)
})
$('.pictures').on('mouseleave',function(){
    let timer = setInterval(slideLeft, 1500)
})

$('.left').on('click',slideLeft)
$('.right').on('click',slideRight)