
let heroImg = document.querySelector('#heroImg')
let rBtn = document.querySelector('.rightBtn')
let lBtn = document.querySelector('.leftBtn')
let rightPostion = 0


const clickHandler = () => {
    if (heroImg.style.backgroundColor === 'grey') {
        heroImg.style.backgroundColor = "blue"
    }
    else {
        heroImgImg.style.backgroundColor = 'grey'
    }
}

const rightHandler = () => {
    rightPostion = rightPostion + 20
    heroImg.style.left = `${rightPostion}px`
}

const leftHandler = () => {
    rightPostion = rightPostion - 20
    heroImg.style.left = `${rightPostion}px`
}

heroImg.onclick = clickHandler;
rBtn.onclick = rightHandler;
lBtn.onclick = leftHandler;