
let n = 1
setInterval(function(){
    let left = -168 * n + 'px'
    $('.pictures').css({
        left:left
    })
    n ++
    if (n === 5){

    }
},2000)