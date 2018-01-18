
let ul = document.querySelector('main .menu ul')

ul.addEventListener('click',function(e){
    let li = e.currentTarget.children
    for (let i = 0; i < li.length; i++) {
        let l = li[i]
        l.classList.remove('active')
    }
    if(e.target.tagName == 'IMG'){
        e.target.parentNode.classList.add('active')
    } else{
        e.target.classList.add('active')
    }
    
    // e.target.parentNode.children.classList.remove('active')
    // e.target.classList.add('active')
})
