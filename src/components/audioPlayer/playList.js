export const playList = [
  {
    title: 'Aqua Caelestis',
    src: './sounds/Aqua Caelestis.mp3',
    duration: '00:58',
  },
  {
    title: 'Ennio Morricone',
    src: './sounds/Ennio Morricone.mp3',
    duration: '01:37',
  },
  {
    title: 'River Flows In You',
    src: './sounds/River Flows In You.mp3',
    duration: '03:50',
  },
  {
    title: 'Summer Wind',
    src: './sounds/Summer Wind.mp3',
    duration: '01:50',
  },
];

const trackList = document.querySelector('.play-list');

playList.forEach((elem) => {
  const li = document.createElement('li');
  li.innerText = elem.title;
  li.classList.add('play-item');
  trackList.append(li);
});

export const handleTrack = (trackNum) => {
  const tracks = document.querySelectorAll('.play-item');
  const arr = Array.from(tracks);

  arr.forEach((elem) => {
    elem.classList.remove('item-active');
  });

  tracks[trackNum].classList.add('item-active');
};
