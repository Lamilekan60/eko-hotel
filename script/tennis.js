const hamburger = document.querySelector(".hamburger")
const navlinks = document.querySelector(".navlinks")
const close = document.querySelector(".close")
const downlink = document.querySelector(".downlink")
const downlinks = document.querySelector(".downlinks")
const down2 = document.querySelector(".down2")
const down = document.querySelector(".down")
const open = document.querySelector('.open')
const down1 = document.querySelector('.down1')
const downlin = document.querySelector('.downlin')
const opens = document.querySelector('.opens')
const closes = document.querySelector('.closes')
const downli = document.querySelector('.downli')
const own = document.querySelector('.own')
const drop = document.querySelector('.drop')
const dope = document.querySelector('.dope')
const down12 = document.querySelector('.down12')
const images = document.querySelector('.images')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const btnn5 = document.querySelector('.btnn5')
const positionInfo = images.getBoundingClientRect();

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active")
    navlinks.classList.toggle("active")
})

close.addEventListener('click',() => {
    if(close.classList.contains('close')){
         downlink.style.display = 'none'
         close.classList.remove('close')
         
    }else{
         downlink.style.display = 'block'
         close.classList.add('close')
    }
})

open.addEventListener('click',() => {
    if(open.classList.contains('close')){
         downlinks.style.display = 'none'
         open.classList.remove('close')
         
    }else{
        downlinks.style.display = 'block'
         open.classList.add('close')
    }
})

opens.addEventListener('click',() => {
    if(opens.classList.contains('close')){
         downlin.style.display = 'none'
         opens.classList.remove('close')
         
    }else{
        downlin.style.display = 'block'
         opens.classList.add('close')
    }
})

closes.addEventListener('click',() => {
    if(closes.classList.contains('close')){
         downli.style.display = 'none'
         closes.classList.remove('close')
         
    }else{
        downli.style.display = 'block'
         closes.classList.add('close')
    }
})

btn4.addEventListener('click',() => {
    var width = positionInfo.width;
    console.log(width)
    images.scrollLeft = images.scrollLeft + width
})

btn5.addEventListener('click',() => {
    var width = positionInfo.width;
    images.scrollLeft = images.scrollLeft - width
})