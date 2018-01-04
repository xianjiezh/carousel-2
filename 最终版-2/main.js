
function log(){
    console.log.apply(console,arguments)
}
let timer = setInterval(function(){

},1500)

let $firstCopy = $('.pictures').children().eq(0).clone(true)
$('.pictures').prepend($firstCopy)
let $lastCopy = $('.pictures').children().eq(-1).clone(true)
$('.pictures').append($lastCopy)
log($lastCopy)
log($firstCopy)