//
// onClick
function toggleMenu() {
  let menuButton = document.getElementById("destop-menu");
  if (menuButton.style.display == "block") {
    menuButton.style.display = "none";
    document.getElementById("navId").style.background = "white";
    document.getElementById("hm-menuIcon").className = "fa fa-bars fa-2x";
    document.getElementById("hm-menuIcon").style.color = "#6070ff";
  } else {
    menuButton.style.display = "block";
    document.getElementById("navId").style.background = "#6070ffd2";
    document.getElementById("hm-menuIcon").className = "fa fa-close fa-2x";
    document.getElementById("hm-menuIcon").style.color = "white";
  }
}
