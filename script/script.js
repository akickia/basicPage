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

  
  function fetchingTest() {
  const url = 'https://fwols7icvedws355rgldfhyhiy0hamrg.lambda-url.eu-north-1.on.aws/';
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error");
      }
      return response.json();
    })
    .then(data => {
      // Handle the JSON data
      console.log(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  }
  fetchingTest()