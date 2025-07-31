function toggleMenu() {
    console.log("test");
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
function openPopup(id) {
    console.log("OPEN KABOM")
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup' + id).style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    for (let i = 1; i <= 4; i++) {
      document.getElementById('popup' + i).style.display = 'none';
    }
  }
  