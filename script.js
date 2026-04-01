let cart = [];

function addToCart(name, price, btn) {
  cart.push({ name, price });
  updateCart();

  // 🔥 Button feedback
  btn.innerText = "Added ✓";
  btn.style.background = "green";

  setTimeout(() => {
    btn.innerText = "Add to Cart";
    btn.style.background = "";
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
    li.innerHTML = `
      ${item.name} - Rs ${item.price}
      <span onclick="removeItem(${index})" style="color:red;cursor:pointer;margin-left:10px;">❌</span>
    `;
    list.appendChild(li);

    total += item.price;
  });

  count.innerText = cart.length;
  document.getElementById("total").innerText = "Total: Rs " + total;
}

// REMOVE ITEM ❌
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// TOGGLE CART
function toggleCart() {
  document.getElementById("cartBox").classList.toggle("active");
}

// CLICK OUTSIDE TO CLOSE
document.addEventListener("click", function(e) {
  let cart = document.getElementById("cartBox");
  let btn = document.querySelector(".cart-btn");

  if (!cart.contains(e.target) && !btn.contains(e.target)) {
    cart.classList.remove("active");
  }
});

// CHECKOUT (WHATSAPP)
function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  let message = "🛒 Order Details:\n\n";

  cart.forEach(item => {
    message += `${item.name} - Rs ${item.price}\n`;
  });

  window.open("https://wa.me/923361236765?text=" + encodeURIComponent(message));
}

// SCROLL ARROW
document.querySelector(".arrow-down").addEventListener("click", function() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});
