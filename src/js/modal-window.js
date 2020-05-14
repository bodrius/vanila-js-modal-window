const getId = document.querySelector('#modal');
const modal = document.querySelector('.toggle-modal');
const buttonClose = document.querySelector('.modal-box__close-button');
const buttonCancel = document.querySelector('.modal-box__button-cancel');
const buttonUninstall = document.querySelector('.modal-box__button-sucsess');
const backDrop = document.querySelector('.modal-box__backdrop');
const hiden = document.querySelector('.modal-box');

getId.addEventListener('click', showModal);

function showModal() {
  modal.classList.remove('toggle-modal');
  window.addEventListener('keydown', closeModalPressEsc);
  buttonUninstall.addEventListener('click', closeModalWithAlert);
  buttonClose.addEventListener('click', closeModal);
  buttonCancel.addEventListener('click', closeModal);
  backDrop.addEventListener('click', closeModalClickToBackdrop);
}

function closeModalPressEsc() {
  if (event.keyCode === 27) {
    modal.classList.add('toggle-modal');
    window.removeEventListener('keydown', closeModalPressEsc);
  }
}

function closeModal() {
  modal.classList.add('toggle-modal');
  buttonClose.removeEventListener('click', closeModal);
  buttonCancel.removeEventListener('click', closeModal);
}

function closeModalWithAlert() {
  setTimeout(() => {
    alert('DONE!!!');
  }, 300);
  modal.classList.add('toggle-modal');
}

function closeModalClickToBackdrop(event) {
  if (event.target === event.currentTarget) {
    modal.classList.add('toggle-modal');
    backDrop.addEventListener('click', closeModalClickToBackdrop);
  }
}
