//
// onClick
function toggleMenu() {
  let menuButton = document.getElementById("destop-menu");
  let mainElement = document.getElementById("section1");

  if (menuButton.style.display == "block") {
    menuButton.style.display = "none";

    document.getElementById("navId").classList.remove("add-bg-to-nav");

    document.getElementById("hm-menuIcon").className = "fa fa-bars fa-2x";
    document.getElementById("hm-menuIcon").style.color = "#6070ffc2";
    document.getElementById("section1").classList.remove("add-blur");
    document.getElementById("logo-text").classList.remove("add-blur");
    enableScroll();
  } else {
    menuButton.style.display = "block";
    document.getElementById("hm-menuIcon").className = "fa fa-close fa-2x";
    document.getElementById("hm-menuIcon").style.color = "white";
    document.getElementById("navId").classList.add("add-bg-to-nav");
    document.getElementById("section1").classList.add("add-blur");
    document.getElementById("logo-text").classList.add("add-blur");
    stopScroll();
    // mainElement.style.filter = "blur(2px)";
  }
}

function navigate(loc) {
  let menuButton = document.getElementById("destop-menu");
  menuButton.style.display = "none";
  // document.getElementById("navId").style.background = "white";
  document.getElementById("navId").classList.remove("add-bg-to-nav");
  document.getElementById("section1").classList.remove("add-blur");
  document.getElementById("logo-text").classList.remove("add-blur");
  document.getElementById("hm-menuIcon").className = "fa fa-bars fa-2x";
  document.getElementById("hm-menuIcon").style.color = "#6070ffc2";
  window.href = loc;
}

function stopScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}
