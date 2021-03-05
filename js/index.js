// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseInt(quantity.value);

  let subtotalValue = priceValue * quantityValue;
  subtotal.innerText = subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  let totalPrice = 0;
  // ITERATION 2
  const products = document.querySelectorAll(".product");
  console.log(products);
  products.forEach( product => {
    let subtotalProdPrice = updateSubtotal(product);
    totalPrice += subtotalProdPrice;
  })

  // ITERATION 3
  const totalValue = document.querySelector("#total-value span")
  totalValue.innerText = totalPrice;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  const productParent = target.parentNode.parentNode; // Accessing parent product

  productParent.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const body = document.querySelector("tbody");
  const newProdName = document.getElementById("new-prod-name").value;
  const newProdPrice = document.getElementById("new-prod-price").value;

  if(newProdName.length === 0) return alert("You didn't enter a Product name!");
  const newProd = document.createElement("tr");
  newProd.classList.add("product");
  newProd.innerHTML = `
                      <td class="name">
                        <span>${newProdName}</span>
                      </td>
                      <td class="price">$<span>${parseInt(newProdPrice)}</span></td>
                      <td class="quantity">
                        <input type="number" value="0" min="0" placeholder="Quantity" />
                      </td>
                      <td class="subtotal">$<span>0</span></td>
                      <td class="action">
                        <button class="btn btn-remove">Remove</button>
                      </td>`

  body.appendChild(newProd);
  // clear form inputs
  document.querySelector('#new-prod-name').value='';
  document.querySelector('#new-prod-price').value=0;

  removeBtn = newProd.querySelector(".btn-remove");
  removeBtn.addEventListener('click',removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach(btn => btn.addEventListener('click',removeProduct));

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener('click', createProduct);
});
