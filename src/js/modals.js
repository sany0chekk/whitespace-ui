import { closeModalAction, openModalAction } from './utils/modalActions';

const contactModal = document.querySelector('#contact');
const contactContainer = document.querySelector('#contact-container');
const contactOpenBtn = document.querySelector('#open-contact');
const contactCloseBtn = document.querySelector('#close-contact');

console.log(contactCloseBtn, contactOpenBtn);

openModalAction(contactOpenBtn, contactModal);
closeModalAction(contactCloseBtn, contactModal, contactContainer);
