import { playList, handleTrack } from './playList';

const playBtn = document.querySelector('.play');
const nextAudioBtn = document.querySelector('.play-next');
const prevAudioBtn = document.querySelector('.play-prev');

let isPlay = false;
const audio = new Audio();

const toggleBtn = () => {
  if (isPlay) {
    playBtn.classList.add('pause');
  } else {
    playBtn.classList.remove('pause');
  }
};

const playAudio = (playNum) => {
  isPlay = !isPlay;

  if (isPlay) {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
  }
  handleTrack(playNum);
  toggleBtn();
};

let playNum = 0;

const prevAudio = () => {
  if (playNum > 0) {
    playNum -= 1;
  } else if (playNum === 0) {
    playNum = playList.length - 1;
  }
  isPlay = false;
  playAudio(playNum);
};

const nextAudio = () => {
  if (playNum < playList.length - 1) {
    playNum += 1;
  } else {
    playNum = 0;
  }
  isPlay = false;
  playAudio(playNum);
};

playBtn.addEventListener('click', () => {
  playAudio(playNum);
});

audio.addEventListener('ended', () => {
  isPlay = !isPlay;
  nextAudio();
});

prevAudioBtn.addEventListener('click', prevAudio);
nextAudioBtn.addEventListener('click', nextAudio);
