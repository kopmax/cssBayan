
let heroImg = window.document.querySelector('.heroImg')
// let rBtn = window.document.querySelector('.rightBtn')
// let lBtn = window.document.querySelector('.leftBtn')
let canvas = window.document.querySelector('#canvas')
let fsBtn = window.document.querySelector('#fsBtn')

fsBtn.onclick = () => {
    console.log(window.document.fullscreenEnabled)
    if (window.document.fullscreenElement) {
        fsBtn.src = 'game/imgs/fullscreen.png'
        window.document.exitFullscreen()
    } else {
        fsBtn.src = 'game/imgs/cancel.png'
        canvas.requestFullscreen()
    }
}

let imgBlock = window.document.querySelector('.hero-sprite-focus')
let rightPostion = 0
let direction = 'right'
let imgBlockPosition = 0
let timer = null
const lifeCycle = () => {
    timer = setInterval(standHandler, 150)
}
let halfWidth = window.screen.width / 2





let onTouchStart = (event) => {
    clearInterval(timer)
    let x = event.pageX
    timer = setInterval(() => {
       if (x > halfWidth) {
        direction = 'right'
        rightHandler()
        } else { 
            direction = 'left'
            leftHandler() 
        }
    }, 100)
}

let onTouchEnd = (event) => {
    clearInterval(timer)
    lifeCycle()
}

const rightHandler = () => {
    heroImg.style.transform = "scale(-1, 1)"
    rightPostion = rightPostion + 1
    imgBlockPosition = imgBlockPosition + 1
    if (rightPostion > 5) rightPostion = 0
    heroImg.style.left = `-${rightPostion*288}px`
    heroImg.style.top = '-576px'
    imgBlock.style.left = `${imgBlockPosition*20}px`    
}

const leftHandler = () => {
    heroImg.style.transform = "scale(1, 1)"
    rightPostion = rightPostion + 1
    imgBlockPosition = imgBlockPosition - 1
    if (rightPostion > 5) rightPostion = 0
    heroImg.style.left = `-${rightPostion*288}px`
    heroImg.style.top = '-576px'
    imgBlock.style.left = `${imgBlockPosition*20}px`
}

const standHandler = () => {
    heroImg.style.transform = "scale(-1, 1)"
    
    // imgBlockPosition = imgBlockPosition + 1
    // if (rightPostion > 4) rightPostion = 1

    switch (direction) {
        case 'right' : {
            heroImg.style.transform = "scale(-1, 1)"
            if (rightPostion > 4) rightPostion = 1
            break
        }
        case 'left' : {
            heroImg.style.transform = "scale(1, 1)"
            if (rightPostion > 3) rightPostion = 0
            break
        }
        default: break;
    }

    rightPostion = rightPostion + 1
    heroImg.style.left = `-${rightPostion*288}px`
    heroImg.style.top = '0px'
    }

window.onmousedown = onTouchStart;
window.onmouseup = onTouchEnd;


const start = () => {
    lifeCycle()
}

start()