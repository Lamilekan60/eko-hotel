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
const btnone = document.querySelector('.btnone')
const btntwo = document.querySelector('.btntwo')
const btnthree = document.querySelector('.btnthree')
const scroll = document.querySelector('.scroll')
const image1 = document.querySelector('image1')
const image2 = document.querySelector('image2')
const image3 = document.querySelector('image3')

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

down12.addEventListener('click', () => {
   if(down12.classList.contains('down12')){
    drop.style.display = 'block'
    down12.classList.remove('down12')
   }else{
    drop.style.display = 'none'
    down12.classList.add('down12')
   }
})

btntwo.addEventListener('click',() => {
  if(btntwo.classList.contains('btntwo')){
    image2.style.display = 'block'
  }else{
    image1.style.display = 'none'
    image3.style.display = 'none'
  }
})

btntwo.addEventListener('click',() => {
    scroll.scrollLeft = scroll.scrollLeft - 1000
})