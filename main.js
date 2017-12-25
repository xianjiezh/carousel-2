


let pics = document.getElementsByClassName('pics')[0]

setInterval(function () {
    let allPic = pics.children
    
    for (let i = 0; i < allPic.length; i++) {
        const picture = allPic[i]
        picture.classList.add('move')
        
    }

},1500)
let n = 0
let arr = ["./img/react.png", "./img/angular.png", "./img/vue.png", "./img/node.png"]
setInterval(function () {
    let m = n % 4
    let t = '<div>hanhanhan</div>'
    console.log('t',t,typeof t)
    console.log('lics',pics)
    pics.insertAdjacentElement('beforeend', t)
    
    n += 1
}, 1000)

function template(src) {
    let t = `<img src=${src}>`
    return t
}
