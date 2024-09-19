import { closeModalAction, openModalAction } from './utils/modalActions';

const openBtn = document.querySelector('#play-video');
const videoModal = document.querySelector('#player');
const videoContainer = document.querySelector('#player-container');

const stopVideo = () => {
  const iframe = document.querySelector('#video');

  if (iframe) {
    let iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
};

openModalAction(openBtn, videoModal);
closeModalAction(null, videoModal, videoContainer, stopVideo);
