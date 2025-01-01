let eKey = document.querySelector('.card.key p:last-child')
let eLocation = document.querySelector('.card.location p:last-child')
let eWhich = document.querySelector('.card.which p:last-child')
let eCode = document.querySelector('.card.code p:last-child')
let alert = document.querySelector('.alert')
let box = document.querySelector('.box')
let result = document.querySelector('.result')


document.addEventListener('keydown', e => {
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
    result.innerText = e.code
    alert.classList.add('hide')
    box.classList.remove('hide')
})