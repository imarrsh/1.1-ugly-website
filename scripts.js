(function(){ // IIFE Start

  // image swap code
  var btn = document.getElementById('cat-button');
  var target = document.getElementById('btn-target');
  var clicks = 0;

  function catButton() {
      console.log('you clicked the "' + btn.id + '"!');

      var catUrls = [
        'http://cbsnews3.cbsistatic.com/hub/i/r/2016/03/23/38e32f54-b910-4612-8852-be9e0fbdbf73/thumbnail/620x350/440a1273973991f75a0ac768f554e37c/cat-istock.jpg',
        'http://media.salon.com/2015/05/kitten.jpg',
        'http://www.petmd.com/sites/default/files/skin-cancer-cats.jpg'
      ],
      l = catUrls.length;

      // late-night index tricks
      if(clicks <= (l - 2)){
        clicks++;
        console.log(clicks);
      } else {
        clicks = 0;
      }

      target.setAttribute('src', catUrls[clicks]);
  }

  // blinker code
  var heading = document.getElementById('logotype');

  function blink() {
    setInterval(function(){
      if(heading.classList == 'blink-on') {
        heading.classList.remove('blink-on');
        heading.classList.add('blink-off');
      } else {
        heading.classList.remove('blink-off');
        heading.classList.add('blink-on');
      }
    }, 500);
  }


  // event listeners
  btn.addEventListener('click', catButton);
  window.addEventListener('load', blink);

}());
