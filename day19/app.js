let color = document.querySelector("#color");
let eraser = document.querySelector("#eraser");
let decrease = document.querySelector("#decrease");
let increase = document.querySelector("#increase");
let size = document.querySelector("#size");
let save = document.querySelector("#save");
let clear = document.querySelector("#clear");
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let Pos1 = { x: 0, y: 0 };
let Pos2 = { x: 0, y: 0 };

let isDrawing = false;
let colorPaint = "#000000";
let sizePaint = 10;
size.innerText = sizePaint;
document.addEventListener("mousedown", (e) => {
  Pos1 = {
    x: e.offsetX,
    y: e.offsetY,
  };
  isDrawing = true;
});

document.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    Pos2 = {
      x: e.offsetX,
      y: e.offsetY,
    };

    //ve fill
    ctx.beginPath();
    ctx.arc(Pos1.x, Pos1.y, sizePaint, 0, 2 * Math.PI);
    ctx.fillStyle = colorPaint;
    ctx.fill();

      
    //ve outline
    ctx.beginPath();
    ctx.moveTo(Pos1.x, Pos1.y);
    ctx.lineTo(Pos2.x, Pos2.y);
    ctx.strokeStyle = colorPaint;
    ctx.lineWidth = sizePaint * 2;
    ctx.stroke();

    Pos1.x = Pos2.x;
    Pos1.y = Pos2.y;
  }
});
document.addEventListener("mouseup", () => {
  isDrawing = false;
});

color.addEventListener("change", () => {
  colorPaint = color.value;
});

eraser.addEventListener("click", () => {
  colorPaint = "#ffffff";
});

decrease.addEventListener("click", () => {
  sizePaint -= 5;
  sizePaint = sizePaint > 5 ? sizePaint : 5;
  size.innerText = sizePaint;
});
increase.addEventListener("click", () => {
  sizePaint += 5;
  sizePaint = sizePaint < 30 ? sizePaint : 30;
  size.innerText = sizePaint;
});

//clear
clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//save
save.addEventListener("click", () => {
    let image = canvas.toDataURL("image/png");
    save.setAttribute("href", image);

});