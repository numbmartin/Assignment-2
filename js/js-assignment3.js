const changeOfTitle = document.querySelector(".page-title")
changeOfTitle.style.color = "darkgrey"
changeOfTitle.style.setProperty('font-size', '2rem')
changeOfTitle.setAttribute('class', 'titleNewStyle')

const addPContent = document.querySelector(".newPContent")
addPContent.innerHTML = "I have new HTML content"

const corgiColors =["red","fawn","black",'sable']
const corgiColorsDisplay = document.querySelector("#colorsOfCorgis")
corgiColorsDisplay.innerHTML= "There are four main colors of Corgis:  " + corgiColors.join(" | ")


const myButton = document.querySelector('.changeBkgrnd')
const wrapper = document.querySelector('.newBkgrnd')
myButton.addEventListener('click', function(){
    
    wrapper.classList.toggle ('clicked')


})
const body = document.body
const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')

modalButton.addEventListener('click', event => {
    modalOverlay.classList.add('modal-is-open')
  })

  modalCloseButton.addEventListener('click', event => {
    modalOverlay.classList.remove('modal-is-open')
  })

  


