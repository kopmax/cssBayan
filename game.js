
let heroImg = window.document.querySelector('.heroImg')
// let rBtn = window.document.querySelector('.rightBtn')
// let lBtn = window.document.querySelector('.leftBtn')
let imgBlock = window.document.querySelector('.hero-sprite-focus')
let rightPostion = 0
let imgBlockPosition = 0
let timer = null
let halfWidth = window.screen.width / 2





let onTouchStart = (event) => {
    let x = event.screenX
    console.log(halfWidth)
    if (x > halfWidth) move = rightHandler
    else move = leftHandler
    timer = setInterval(() => {
        move()
    }, 100)
}

let onTouchEnd = (event) => {
    clearInterval(timer)
}

const rightHandler = () => {
    rightPostion = rightPostion + 1
    imgBlockPosition = imgBlockPosition + 1
    if (rightPostion > 5) rightPostion = 0
    heroImg.style.left = `-${rightPostion*288}px`
    imgBlock.style.left = `${imgBlockPosition*20}px`    
}

const leftHandler = () => {
    heroImg.style.transform = 'scale(1, 1)'
    rightPostion = rightPostion + 1
    imgBlockPosition = imgBlockPosition + 1
    if (rightPostion > 5) rightPostion = 0
    heroImg.style.left = `-${rightPostion*288}px`
    imgBlock.style.left = `${imgBlockPosition*20}px`
}

window.onmousedown = onTouchStart;
window.onmouseup = onTouchEnd;