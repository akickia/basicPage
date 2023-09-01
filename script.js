let boxes = document.querySelectorAll(".box")
let bodyEl = document.querySelector("body")


window.addEventListener("scroll", scrollAnimation)

function scrollAnimation() {
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if(boxTop < triggerBottom) {
      box.classList.add('fade-in')
    }
    else {
      box.classList.remove('fade-in')
    }
  })}