let btnSuccess = document.querySelector(".control .success");
let btnWarning = document.querySelector(".control .warning");
let btnError = document.querySelector(".control .error");

btnSuccess.addEventListener("click", function () {
    createToast("success");
});
btnWarning.addEventListener("click", function () {
    createToast("warning");
});
btnError.addEventListener("click", function () {
    createToast("error", 5000);
});

function createToast(status, timeout) {
    let templateInner;
  switch (status) {
    case "success":
       templateInner = `<i class="fas fa-check-circle"></i>
        <span class="message">Show Success</span>
        <i class="fas fa-times"></i>`;
      break;
    case "warning":
       templateInner = `<i class="fas fa-exclamation-circle"></i>
      <span class="message">Show Warning </span>
      <i class="fas fa-times"></i>`;
      break;
    case "error":
       templateInner = `<i class="fas fa-times-circle"></i>
      <span class="message">Show Error</span>
      <i class="fas fa-times"></i>`;
      break;
  }

  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);
  toast.innerHTML = `${templateInner}
        <span class="countdown"></span>`;
  let toastList = document.getElementById("toasts");
    toastList.appendChild(toast);
    timeout = timeout || 2000;
    
    setTimeout(() => {
        toast.style.animation = 'slide_hide 2s ease forwards';
    }, timeout);
    setTimeout(() => {
        toast.remove();
    }, timeout + 2000);
}
