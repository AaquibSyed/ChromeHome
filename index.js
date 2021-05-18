function changeBackground() {
  var srchArea = document.getElementById("searchArea");
  const color1 = this.getAttribute("color1");
  const color2 = this.getAttribute("color2");
  const gradientType = this.getAttribute("gradientType");
  const direction = this.getAttribute("direction");
  if (gradientType == "radial") {
    srchArea.style.background = `${gradientType}-gradient(${color1}, ${color2})`;
  } else {
    srchArea.style.background = `${gradientType}-gradient(to ${direction}, ${color1}, ${color2})`;
  }
}

function toggleDarkMode() {
  var srchArea = document.getElementById("searchArea");
  srchArea.classList.toggle("darkMode");
}
