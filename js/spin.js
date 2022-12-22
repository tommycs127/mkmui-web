$(document).ready(() => {
  const button = $('a#start');
  const button_section = $('div#video-start-button');
  const video = $('video#vid').get(0);
  const video_section = $('div#video-box')
  const text = $('span#text');
  const counter = $('span#count');
  
  const total_spins = 16;
  var count = 0;
  var last_spins = 0;
  
  $('video#vid').bind('timeupdate', () => {
    var spins = Math.floor(video.currentTime / (video.duration / total_spins));
    if (spins != last_spins) {
      last_spins = spins;
      count++;
      counter.text(count);
    }
  });

  button.click(() => {
    button_section.hide();
    video_section.show();
    video.play();
    text.show();
  });
});