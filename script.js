document.getElementById('loadButton').addEventListener('click', function() {
  // Hide the button after clicking
  this.style.display = 'none';

  // Show the loader container
  document.getElementById('loaderContainer').style.display = 'block';

  // After 1 second, remove the loader and show the content
  setTimeout(function() {
    // Remove the honeycomb loader
    document.getElementById('loaderContainer').style.display = 'none';

    // Get the portfolioContent element
    var portfolioContent = document.getElementById('portfolioContent');

    // Show the content with the fade-in and slide-in effect
    portfolioContent.style.display = 'block';

    // Add your portfolio content here
    portfolioContent.innerHTML = `
      <h2>Welcome to My Portfolio</h2>
      <p>I'm <b>Vengence</b>, and this is my awesome portfolio website.</p>
      <p>Feel free to explore and learn more about my projects and skills!</p>
    `;

    // After displaying the content, you can also remove the button if you want
    document.getElementById('loadButton').style.display = 'none';

    // Play the audio
    playAudio();
  }, 1000);
});

function playAudio() {
  var audio = document.getElementById('audio');
  audio.play();
}
