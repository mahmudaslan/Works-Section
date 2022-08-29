let switcherEl = document.querySelectorAll(".switcher li");
let images = Array.from(document.images);

switcherEl.forEach((ele) => {
  ele.addEventListener("click", removeActive);
  ele.addEventListener("click", manageImages);
});

function removeActive() {
  switcherEl.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manageImages() {
  images.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cont).forEach((img) => {
    img.style.display = "block";
  });
}
