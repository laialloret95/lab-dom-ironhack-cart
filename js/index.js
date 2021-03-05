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
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach(btn => btn.addEventListener('click',removeProduct));

  //... your code goes here
});
