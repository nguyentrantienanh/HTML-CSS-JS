fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
 
    let products = document.querySelector(".products");
    products.innerHTML = "";
    data.forEach((item) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("product");
      newProduct.innerHTML = `
        <img src="${item.image}"/>
                <div class="info">
                    <div class="name">${item.title}</div>
                    <div class="price">${item.price}</div>
                </div>
    `;
      products.appendChild(newProduct);
    });
  });


let input = document.querySelector(".search input");
input.addEventListener("input", (e) => { 
    let txtSearch = e.target.value.trim().toLowerCase();
    let listProductDom = document.querySelectorAll(".product");
    listProductDom.forEach(item => {
        if (item.innerText.toLowerCase().includes(txtSearch)) {
            item.classList.remove("hide");
        }else{
            item.classList.add("hide");
        }
     })
})