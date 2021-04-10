/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleButton() {
  document.getElementById("navList").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var navList = document.getElementById("navList");
    if (navList.classList.contains('show')) {
      navList.classList.remove('show');
    }
  }
}