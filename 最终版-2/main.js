
let n = 0
setInterval(function(){
    let left = -168 * n + 'px'
    $('.pictures').css({
        left:left
    })
    n ++
    if (n === 4){
        n = 0
    }
},2000)