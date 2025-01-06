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
const flexitem = document.querySelector('.flexitem')
const boxitems = document.querySelector('.boxitems')
const foward = document.querySelector('.foward')
const backward = document.querySelector('.backward')
const Adult = document.querySelector('.Adult')
const Adult1 = document.querySelector('.Adult1')
const child =document.querySelector('.child')
const child1 =document.querySelector('.child1')
const imagessbox = document.querySelector('.imagessbox')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const positionInfo = flexitem.getBoundingClientRect();



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

foward.addEventListener('click',()=> {
    var width = positionInfo.width;
    flexitem.scrollLeft = flexitem.scrollLeft + width
})

backward.addEventListener('click',()=> {
    var width = positionInfo.width;
    flexitem.scrollLeft = flexitem.scrollLeft - width
})

Adult1.addEventListener('click',() => {
    if(Adult1.classList.contains('Adult1')){
         Adult.style.display = 'block'
         Adult1.classList.remove('Adult1')
    }else{
          Adult.style.display = 'none'
          Adult1.classList.add('Adult1')
    }
})

child1.addEventListener('click',() => {
  if(child1.classList.contains('child1')){
      child.style.display = 'block'
      child1.classList.remove('child1')
  }else{
     child.style.display = 'none'
     child1.classList.add('child1')
  }
})

prev.addEventListener('click',() => {
    var width = positionInfo.width;
    imagessbox.scrollLeft = screenLeft - width
})

next.addEventListener('click',() => {
    var width = positionInfo.width;
    imagessbox.scrollLeft = screenLeft +  width
})

