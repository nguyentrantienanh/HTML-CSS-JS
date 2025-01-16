let listCounter = document.querySelectorAll(".counter");

function count(el) {
  let numberEl = el.querySelector('.number')
  let to = parseInt(numberEl.innerText);
  let count = 0;
  let time = 250;
  let step = to / time;

  let counting = setInterval(() => {
    count += step;
    if (count > to) {
      clearInterval(counting);
      numberEl.innerText = to;
    } else {
      numberEl.innerText = Math.round(count);
    }
  }, 1);
}

listCounter.forEach(item => {
  count(item)
})
