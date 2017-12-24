


let pictures = document.getElementsByClassName('pics')[0]
let n = 1
pictures.clientWidth = document.documentElement.clientWidth

function setTimer(){
    let firstChild = pictures.firstElementChild
    let leftLength = n * (-192) + 'px'
    console.log('leftLength:'+leftLength)
    pictures.style.transform = 'translateX('+leftLength+')'
    pictures.style.transition = 'all .6s'
    pictures.firstElementChild.remove()
    console.log(firstChild)
    pictures.insertAdjacentElement('beforeend',firstChild)
    console.log(pictures)
    n += 1
}

let timer = setInterval(setTimer, 1500)

let picWrapper = document.getElementsByClassName('picsWrapper')[0]
picWrapper.onmouseenter = function () {
    clearInterval(timer)
}
picWrapper.onmouseleave = function () {
    timer = setInterval(setTimer, 1500)
}