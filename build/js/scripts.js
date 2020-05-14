"use strict";

var getId = document.querySelector('#modal');
var modal = document.querySelector('.modal-box');
var buttonClose = document.querySelector('.modal-box__close-button');
var buttonCancel = document.querySelector('.modal-box__button-cancel');
var buttonUninstall = document.querySelector('.modal-box__button-sucsess');
var backDrop = document.querySelector('.modal-box__backdrop');
var hiden = document.querySelector('.modal-box');
getId.addEventListener('click', showModal);

function showModal() {
  modal.classList.remove('close-modal');
  modal.classList.add('toggle-modal');
  window.addEventListener('keydown', closeModalPressEsc);
  buttonUninstall.addEventListener('click', closeModalWithAlert);
  buttonClose.addEventListener('click', closeModal);
  buttonCancel.addEventListener('click', closeModal);
  backDrop.addEventListener('click', closeModalClickToBackdrop);
}

function closeModalPressEsc() {
  if (event.keyCode === 27) {
    modal.classList.toggle('toggle-modal');
    modal.classList.add('close-modal');
    window.removeEventListener('keydown', closeModalPressEsc);
  }
}

function closeModal() {
  modal.classList.toggle('toggle-modal');
  modal.classList.add('close-modal');
  buttonClose.removeEventListener('click', closeModal);
  buttonCancel.removeEventListener('click', closeModal);
}

function closeModalWithAlert() {
  setTimeout(function () {
    alert('DONE!!!');
  }, 500);
  modal.classList.toggle('toggle-modal');
  modal.classList.add('close-modal');
}

function closeModalClickToBackdrop(event) {
  if (event.target === event.currentTarget) {
    modal.classList.toggle('toggle-modal');
    modal.classList.add('close-modal');
    backDrop.addEventListener('click', closeModalClickToBackdrop);
  }
}