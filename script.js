// read custom message from query strings
const urlSearchParams = new URLSearchParams(window.location.search)
const messageCustom = urlSearchParams.get('message')

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(() => {
    coverElement.style.zIndex = -1
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
    createHearts()
  }, 500)
})

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')

  setTimeout(() => {
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  }, 500)
})

function createHearts() {
  const heartsContainer = document.querySelector('#heartsContainer')

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div')
    heart.classList.add('heart-animation')
    heart.textContent = '♥'
    heart.style.left = `${Math.random() * 100}%`
    heart.style.top = `${Math.random() * 100}%`
    heartsContainer.appendChild(heart)

    setTimeout(() => {
      heart.remove()
    }, 2000)
  }
}
const btnNextElement = document.querySelector('#next');

btnNextElement.addEventListener('click', () => {
  window.location.href = 'corazon.html';
});

