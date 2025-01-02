// Tham chiếu đến phần tử DOM
let content = document.querySelector(".content"); // Vùng chứa danh sách thẻ (tags) và input
let input = document.querySelector(".content input"); // Input để nhập thẻ mới
let btnRemoveAll = document.querySelector(".remove-all"); // Nút xóa tất cả các thẻ

// Danh sách các thẻ mặc định
let tags = ["Nodjs", "Reactjs"]; // Mảng chứa các thẻ ban đầu

// Hàm render: Vẽ lại giao diện mỗi khi danh sách thay đổi
function render() {
  content.innerHTML = ""; // Xóa nội dung cũ trong .content
  for (let i = 0; i < tags.length; i++) {
    // Lặp qua danh sách các thẻ
    const tag = tags[i]; // Lấy từng thẻ
    // Thêm thẻ <li> vào .content, kèm nút xóa (icon x)
    content.innerHTML += `<li>
                ${tag}
                <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
            </li>`;
  }

  // Thêm lại ô input vào cuối .content
  content.appendChild(input);
  // Đưa con trỏ vào ô input để sẵn sàng nhập liệu
  input.focus();
}

// Hàm removeTag: Xóa một thẻ theo chỉ số trong mảng
function removeTag(index) {
  tags.splice(index, 1); // Xóa thẻ tại vị trí index
  render(); // Vẽ lại giao diện sau khi xóa
}

// Gọi hàm render lần đầu tiên để hiển thị giao diện ban đầu
render();

// Sự kiện keydown: Thêm thẻ mới khi nhấn Enter trong ô input
input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    // Kiểm tra nếu phím Enter được nhấn
    // Thêm nội dung input vào danh sách tags (sau khi loại bỏ khoảng trắng)
    tags.push(input.value.trim());
    input.value = ""; // Xóa nội dung trong input
    render(); // Vẽ lại giao diện với thẻ mới
  }
});

// Sự kiện click: Xóa tất cả các thẻ khi nhấn nút "Xóa tất cả"
btnRemoveAll.addEventListener("click", function () {
  tags = []; // Đặt lại danh sách tags thành mảng rỗng
  render(); // Vẽ lại giao diện sau khi xóa
});
