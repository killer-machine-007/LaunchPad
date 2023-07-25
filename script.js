document.getElementById('loadButton').addEventListener('click', function() {
  this.style.display = 'none';
  document.getElementById('loaderContainer').style.display = 'block';
  playAudio();
  setTimeout(function() {
    document.getElementById('loaderContainer').style.display = 'none';
    var portfolioContent = document.getElementById('portfolioContent');
    portfolioContent.style.display = 'block';
    portfolioContent.innerHTML = `
      <h2>Welcome to My Portfolio</h2>
      <p>I'm <h3>Vengence</h3></p>
      `;
    document.getElementById('loadButton').style.display = 'none';
    var socialIcons = document.getElementById('socialIcons');
    socialIcons.style.display = 'block';
  }, 2500);
});

function playAudio() {
  var audio = document.getElementById('audio');
  audio.play();
}
