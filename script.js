let cart = [];

// ADD TO CART
function addToCart(name, price, btn) {
  cart.push({ name, price });
  updateCart();

  btn.innerText = "Added ✓";
  btn.style.background = "green";

  setTimeout(() => {
    btn.innerText = "Add to Cart";
    btn.style.background = "gold";
  }, 1000);
}

// UPDATE CART
function updateCart() {
  let list = document.getElementById("cartItems");
  let count = document.getElementById("count");
  let total = 0;

  list.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${item.name} - Rs ${item.price} 
    <span onclick="removeItem(${index})" style="color:red;cursor:pointer;">❌</span>`;
    list.appendChild(li);

    total += item.price;
  });

  count.innerText = cart.length;
  document.getElementById("total").innerText = "Total: Rs " + total;
}

// REMOVE
function removeItem(i) {
  cart.splice(i, 1);
  updateCart();
}

// CART TOGGLE
function toggleCart() {
  document.getElementById("cartBox").classList.toggle("active");
}

// CLICK OUTSIDE CLOSE
document.addEventListener("click", function(e) {
  let cartBox = document.getElementById("cartBox");
  let btn = document.querySelector(".cart-btn");

  if (!cartBox.contains(e.target) && !btn.contains(e.target)) {
    cartBox.classList.remove("active");
  }
});

// CHECKOUT
function checkout() {
  if (cart.length === 0) {
    alert("Cart empty!");
    return;
  }

  let msg = "Order:\n";

  cart.forEach(item => {
    msg += item.name + " - Rs " + item.price + "\n";
  });

  window.open("https://wa.me/923361236765?text=" + encodeURIComponent(msg));
}

// SCROLL
document.querySelector(".arrow-down").onclick = function() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};
function openProduct(page) {
  window.location.href = page;
}
