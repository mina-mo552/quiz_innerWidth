// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

function handleResize() {
  if (window.innerWidth <= 500) {
    document.body.style.backgroundColor = "yellowgreen";
  } else if (window.innerWidth > 500 && window.innerWidth < 800) {
    document.body.style.backgroundColor = "skyblue";
  } else if (window.innerWidth >= 800 && window.innerWidth < 1000) {
    document.body.style.backgroundColor = "pink";
  } else {
    document.body.style.backgroundColor = "violet";
  }
}

window.addEventListener("resize", handleResize);
