function showDate() {
  setInterval(function setTime() {
    document.getElementById('time').innerHTML = Date();
  }, 1000);
}

function showHomePage() {
  document.getElementById('Homepage').style.display = 'block';
  document.getElementById('About').style.display = 'none';
  document.getElementById('contactInfo').style.display = 'none';
}
function showAboutPage() {
  document.getElementById('Homepage').style.display = 'none';
  document.getElementById('About').style.display = 'block';
  document.getElementById('contactInfo').style.display = 'none';
}
function showContactInfo() {
  document.getElementById('Homepage').style.display = 'none';
  document.getElementById('About').style.display = 'none';
  document.getElementById('contactInfo').style.display = 'block';
}
