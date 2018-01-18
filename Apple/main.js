
let n = 0

let buttons = document.querySelectorAll('main .menu ul li')
for (let i = 0; i < buttons.length; i++) {
    const pic = buttons[i]
    pic.addEventListener('click',function(e){
        removeAllActive(buttons)
        n = nthSibling(buttons, e.currentTarget)
        buttons[n].classList.add('active')
        slideLeft()
    })
}

let timer = setInterval(slideLeft, 3000)
function slideLeft(){
    n %= 4
    let slides = document.querySelector('main .wrapper ul')
    let distance = -n * 920 +'px'
    slides.style.marginLeft = distance
    removeAllActive(buttons)
    buttons[n].classList.add('active')
    n += 1
}
function removeAllActive(element){
    for (let i = 0; i < element.length; i++) {
        const ele = element[i];
        ele.classList.remove('active')
    }
}
function nthSibling(siblings, target){
    for (let i = 0; i < siblings.length; i++) {
        let element = siblings[i];
        if (element === target){
            return i
        }
    }
}