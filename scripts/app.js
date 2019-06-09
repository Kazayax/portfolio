// Same height blocs
  const sameHeight = document.querySelectorAll(".line")

  resizeSameHeight()
  window.addEventListener("resize",
  function (){
    resizeSameHeight()
  })
  
  function resizeSameHeight(){
  
    let maxHeight = 0
    for (let i = 0; i < sameHeight.length;i++){
      sameHeight[i].style.height = 'auto'
    }
  
    if(window.innerWidth > 450){
      for(let i = 0; i<sameHeight.length; i++){
        if(sameHeight[i].offsetHeight > maxHeight)
        {
          maxHeight=sameHeight[i].offsetHeight
        }
      }
  
      for (let i = 0; i < sameHeight.length;i++){
        sameHeight[i].style.height = maxHeight+40+'px'
      }
    }
  }



// Zoom

const $image = document.querySelectorAll(".myImages img")
const $fatImg = document.querySelector(".fatImg")
const $img = $fatImg.querySelector("div")

for (let i = 0; i < $image.length; i++) {
  $image[i].addEventListener("click", () => {
    $img.style.backgroundImage = `url(${$image[i].src})`
    $fatImg.classList.add("active")
  })
}

$fatImg.addEventListener("click", () => {
  $fatImg.classList.remove("active")
})



