let images = document.querySelectorAll(".image img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let close = document.querySelector(".close");
let galleryImg = document.querySelector(".gallery__inner img");
let gallery = document.querySelector(".gallery");
let currentIndex = 0;

function showGallery() {
    if (currentIndex == 0) {
        prev.classList.add("hide")
    } else {
        prev.classList.remove("hide")
    }
    if (currentIndex == images.length - 1) {
        next.classList.add("hide")
    } else {
        next.classList.remove("hide")
    }
   
    // show
  galleryImg.src = images[currentIndex].src;
  gallery.classList.add("show");
}
images.forEach((item, index) => {
  item.addEventListener("click", function () {
    currentIndex = index;
    showGallery()
  });
});

close.addEventListener("click", function () {
  gallery.classList.remove("show");
});
// an nut Esc
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }
});

prev.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--
        showGallery()
    }
})

next.addEventListener('click', function () {
    if (currentIndex < images.length -1) {
        currentIndex++
        showGallery()
    }
})