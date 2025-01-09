let process = document.querySelector(".process");
let range = document.querySelector(".range");
let value = document.querySelector(".process span");
let body = document.querySelector("body");

function updateProcess(percent) {
  process.style.width = percent + "%";
  value.textContent = percent + "%";

  let bgColor = `rgba(22,22, 22, ${percent / 100})`; // Đậm dần
  body.style.background = bgColor;
}

range.addEventListener("mousemove", function (e) {
  let processWidth = e.pageX - this.offsetLeft;
  let percent = (processWidth / this.offsetWidth) * 100;
  percent = Math.round(percent);

  updateProcess(percent);
});

updateProcess(50);
