let upload = document.querySelector("#mypicture"); // Lấy phần tử input với id "mypicture" (input loại file).
let preview = document.querySelector(".preview"); // Lấy phần tử div có class "preview" để hiển thị ảnh xem trước.
let error = document.querySelector(".error"); // Lấy phần tử div có class "error" để hiển thị thông báo lỗi.

upload.addEventListener("change", function (e) {
  // Thêm sự kiện 'change' khi người dùng chọn tệp trong input.
  let file = upload.files[0]; // Lấy tệp đầu tiên được chọn (chỉ hỗ trợ một tệp trong input).

  // Kiểm tra nếu không có tệp nào được chọn
  if (!file) {
    return; // Dừng lại nếu không có tệp
  }
  // Kiểm tra loại tệp (chỉ cho phép tệp PNG)
  if (file.type != "image/png") {
    // Kiểm tra nếu loại tệp không phải PNG.
    error.innerHTML = "Hình ảnh không phải PNG"; // Hiển thị thông báo lỗi nếu loại tệp không phải PNG.
    return; // Dừng thực thi hàm nếu loại tệp không hợp lệ.
  } else {
    error.innerHTML = ""; // Nếu tệp hợp lệ, xóa thông báo lỗi (nếu có).
  }

  // // Kiểm tra kích thước tệp (chỉ cho phép tệp có kích thước nhỏ hơn 1MB)
  // if (file.size > 1024 * 1024) {  // Kiểm tra nếu kích thước tệp lớn hơn 1MB (1024 KB * 1024).
  //     error.innerHTML = 'Hình ảnh quá lớn';  // Hiển thị thông báo lỗi nếu tệp quá lớn.
  //     return;  // Dừng thực thi hàm nếu kích thước không hợp lệ.
  // } else {
  //     error.innerHTML = '';  // Nếu tệp hợp lệ, xóa thông báo lỗi (nếu có).
  // }

  // Hiển thị ảnh xem trước
  let img = document.createElement("img"); // Tạo một phần tử <img> mới để hiển thị ảnh.
  let fileReader = new FileReader(); // Tạo đối tượng FileReader để đọc dữ liệu tệp.

  fileReader.readAsDataURL(file); // Đọc tệp và chuyển nó thành một chuỗi base64 (dữ liệu URL).

  fileReader.onload = function (e) {
    // Hàm này sẽ được gọi khi FileReader đã đọc xong tệp.
    img.src = e.target.result; // Gán dữ liệu base64 vào thuộc tính src của thẻ img.
  };

  // Xóa ảnh trước đó (nếu có) để tránh hiển thị nhiều ảnh chồng lên nhau.
  preview.appendChild(img); // Thêm thẻ img vào trong phần tử preview để hiển thị ảnh xem trước.
});
