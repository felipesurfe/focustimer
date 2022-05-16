//DOM
//Document Object Model

//Refatoração: mudara um código para deixa-lo mais entendível
//Deixar o código mais performático
//Sem alterar suas funcionalidades

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')

//Event-driven
//Programação imperativa
//Callback 

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
})

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')  
})

buttonStop.addEventListener('click', function() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}) 