
let pics=document.querySelector('.container .picsWrapper .pics')
let n1 = 0
setInterval(function () {
    let allPic = pics.children
    for (let i = 0; i < allPic.length; i++) {
        const picture = allPic[i]
        let moveLength = 'translateX('+(-168 * n1)+'px)'
        picture.style.transform = moveLength
    }
    n1 += 1
},1500)

let n2 = 0
let arr = ["./img/react.png", "./img/angular.png", "./img/vue.png", "./img/node.png"]
setInterval(function () {
    let m = n2 % 4
    let t = template(arr[m])
    pics.insertAdjacentHTML('beforeend', t)
    n2 += 1
}, 1500)

function template(src) {
    let t = `<img src=${src}>`
    return t
}
