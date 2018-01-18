
let li = document.querySelectorAll('main .menu ul li')
for (let i = 0; i < li.length; i++) {
    const pic = li[i]
    console.log('pic', pic)
    pic.addEventListener('click',function(e){
        let siblings = e.currentTarget.parentElement.children
        for (let i = 0; i < siblings.length; i++) {
            const element = siblings[i];
            element.classList.remove('active')
        }
        e.currentTarget.classList.add('active')
    })
}



let timer = setInterval(slideLeft, 3000)
let n = 0
function slideLeft(){
    n %= 4
    let slides = document.querySelector('main .wrapper ul')
    let distance = -n * 920 +'px'
    slides.style.marginLeft = distance
    n += 1
}
