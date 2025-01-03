// Lấy các phần tử DOM từ trang web
let username = document.querySelector("#username"); // Trường nhập tên người dùng
let email = document.querySelector("#email"); // Trường nhập email
let password = document.querySelector("#password"); // Trường nhập mật khẩu
let confirmPassword = document.querySelector("#confirm-password"); // Trường xác nhận mật khẩu
let form = document.querySelector("form"); // Thẻ form chính

// Hàm hiển thị lỗi trên input
function showError(input, message) {
  let parent = input.parentElement; // Lấy phần tử cha của input
  let small = parent.querySelector("small"); // Tìm thẻ <small> để hiển thị lỗi
  parent.classList.add("error"); // Thêm class "error" vào phần tử cha
  small.innerText = message; // Gán nội dung thông báo lỗi vào thẻ <small>
}

// Hàm xóa thông báo lỗi và hiển thị trạng thái thành công
function showSuccess(input, message) {
  let parent = input.parentElement; // Lấy phần tử cha của input
  let small = parent.querySelector("small"); // Tìm thẻ <small> để hiển thị thông báo
  parent.classList.remove("error"); // Xóa class "error" khỏi phần tử cha
  small.innerText = ""; // Xóa nội dung thông báo lỗi
}

// Hàm kiểm tra xem các trường có bị để trống không
function checkEmptyError(listInput) {
  let isEmptyError = false; // Biến lưu trạng thái lỗi trống
  listInput.forEach((input) => {
    input.value = input.value.trim(); // Loại bỏ khoảng trắng thừa
    if (!input.value) { // Nếu trường bị để trống
      isEmptyError = true; // Đánh dấu là có lỗi
      showError(input, "Không được để trống"); // Hiển thị thông báo lỗi
    } else {
      showSuccess(input); // Hiển thị trạng thái thành công
    }
  });
  return isEmptyError; // Trả về trạng thái lỗi
}

// Hàm kiểm tra định dạng email
function checkEmailError(input) {
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Biểu thức kiểm tra định dạng email

  input.value = input.value.trim(); // Loại bỏ khoảng trắng thừa

  let isEmailError = !regexEmail.test(input.value); // Kiểm tra email có hợp lệ không
  if (!isEmailError) {
    showSuccess(input); // Hiển thị trạng thái thành công
  } else {
    showError(input, "Email không hợp lệ"); // Hiển thị thông báo lỗi
  }
  return isEmailError; // Trả về trạng thái lỗi
}

// Hàm kiểm tra định dạng mật khẩu
function checkPasswordError(input) {
  const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // Biểu thức kiểm tra mật khẩu
  input.value = input.value.trim(); // Loại bỏ khoảng trắng thừa

  let isPasswordError = !regexPass.test(input.value); // Kiểm tra mật khẩu có hợp lệ không
  if (!isPasswordError) {
    showSuccess(input); // Hiển thị trạng thái thành công
  } else {
    showError(
      input,
      "Password không hợp lệ. Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và có độ dài từ 6 đến 20 ký tự."
    ); // Hiển thị thông báo lỗi
  }
  return isPasswordError; // Trả về trạng thái lỗi
}

// Hàm kiểm tra độ dài của input
function checkLengthError(input, min, max) {
  input.value = input.value.trim(); // Loại bỏ khoảng trắng thừa

  if (input.value.length < min) { // Nếu độ dài nhỏ hơn yêu cầu tối thiểu
    showError(input, `Phải có ít nhất ${min} ký tự`); // Hiển thị thông báo lỗi
    return true; // Trả về trạng thái lỗi
  }
  if (input.value.length > max) { // Nếu độ dài vượt quá tối đa
    showError(input, `Không được quá ${max} ký tự`); // Hiển thị thông báo lỗi
    return true; // Trả về trạng thái lỗi
  }

  showSuccess(input); // Hiển thị trạng thái thành công
  return false; // Không có lỗi
}

// Hàm kiểm tra mật khẩu và xác nhận mật khẩu
function checkMatchPasswordError(passwordInput, cfPasswordInput) {
  if (passwordInput.value !== cfPasswordInput.value) { // Nếu mật khẩu không khớp
    showError(cfPasswordInput, "Mật khẩu chưa trùng khớp"); // Hiển thị thông báo lỗi
    return true; // Trả về trạng thái lỗi
  }
  return false; // Không có lỗi
}

// Lắng nghe sự kiện khi nhập hoặc thoát khỏi trường nhập
username.addEventListener("blur", function () {
    checkEmptyError([username]);
    checkLengthError(username, 5, 15);
  });
  
  email.addEventListener("blur", function () {
    checkEmptyError([email]);
    checkEmailError(email);
  });
  
  password.addEventListener("blur", function () {
    checkEmptyError([password]);
    checkPasswordError(password);
  });
  
  confirmPassword.addEventListener("blur", function () {
    checkEmptyError([confirmPassword]);
    checkMatchPasswordError(password, confirmPassword);
  });
  
  // Lắng nghe sự kiện khi người dùng nhập (để kiểm tra liên tục)
  username.addEventListener("input", function () {
    checkEmptyError([username]);
    checkLengthError(username, 5, 15);
  });
  
  email.addEventListener("input", function () {
    checkEmptyError([email]);
    checkEmailError(email);
  });
  
  password.addEventListener("input", function () {
    checkEmptyError([password]);
    checkPasswordError(password);
  });
  
  confirmPassword.addEventListener("input", function () {
    checkEmptyError([confirmPassword]);
    checkMatchPasswordError(password, confirmPassword);
  });
  

// Xử lý sự kiện "submit" của form
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn chặn hành vi mặc định của form (refresh trang)

  // Kiểm tra các lỗi
  let isEmptyError = checkEmptyError([
    username,
    email,
    password,
    confirmPassword,
  ]);
  let isEmailError = checkEmailError(email);
  let isUsernameLengthError = checkLengthError(username, 5, 15);
  let isPasswordError = checkPasswordError(password);
  let isMatchError = checkMatchPasswordError(password, confirmPassword);

  // Nếu có bất kỳ lỗi nào, hiển thị thông báo thất bại
  if (
    isEmptyError ||
    isEmailError ||
    isUsernameLengthError ||
    isPasswordError ||
    isMatchError
  ) {
    alert("Đăng nhập thất bại. Vui lòng kiểm tra và nhập lại thông tin.");
  } else {
      // Nếu không có lỗi, hiển thị thông báo thành công
      //do nothing
    alert("Đăng nhập thành công!");
      // Thêm logic khác tại đây nếu cần (ví dụ: chuyển trang)
      //logic, call API, ...
  }
});
