document.addEventListener("DOMContentLoaded", function () {
  setTimeout(showPage(), 2000)
})

function showPage() {
  const loader = document.getElementsByClassName("loader_img")

  loader.style.opacity = "0"
}
