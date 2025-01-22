/** Hamburger Menu **/

const hamburgerContainer = document.querySelector("#header__main-nav");
const hamburger = document.querySelector(".header__main-nav--hamburger");
const links = document.querySelectorAll(".header__main-nav--links li");

hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("clicked");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

/* End of Hamburger Menu */

/** Cursor **/

var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });



/** what we do nav */

console.clear();
const elApp = document.querySelector("#app");

// What we need...
// Mouse position
// Currently hovered item

document.body.addEventListener("mousemove", (event) => {
  console.log({
    x: event.clientX,
    y: event.clientY
  });

  elApp.style.setProperty("--x", event.clientX);
  elApp.style.setProperty("--y", event.clientY);
});

// Replay animation by hiding & showing the element again
let el = document.body;
el.addEventListener("click", function (e) {
  el.hidden = true;
  requestAnimationFrame(() => {
    el.hidden = false;
  });
});

/** We redo websites **/

let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title');

const scrollInProgress = () => {
	didScroll = true
}

const raf = () => {
	if(didScroll) {
		paralaxTitles.forEach((element, index) => {
			element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
		})
		didScroll = false;
	}
	requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)

/* End of Redo Websites */