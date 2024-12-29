let btOpen = document.querySelector(".open-modal-btn");
let modal = document.querySelector(".modal");
let iconClose = document.querySelector(".modal__header i");
let btnClose = document.querySelector(".modal__footer button");

function toggleModal() {
    modal.classList.toggle('hide')
}

btOpen.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
// modal.addEventListener('click', function (e) {
//     if (e.target == e.currentTarget) {
//         toggleModal()
//     }
// })