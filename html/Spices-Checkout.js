// Function to initialize Add to Cart buttons
function initializeAddToCart() {
    // Select all buttons in spice cards
    const addToCartButtons = document.querySelectorAll(".spice-card button");
  
    // Attach click event listeners to each button
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Get parent card element
        const card = button.closest(".spice-card");
  
        // Extract item details
        const itemName = card.querySelector("h3").innerText;
        const itemPrice = parseInt(card.querySelector(".price").innerText.replace("₹", ""));
  
        // Add item to the cart
        addToCart(itemName, itemPrice);
      });
    });
  }
  
  // Function to add items to the cart
  function addToCart(itemName, itemPrice) {
    // Retrieve existing cart items from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Add new item to the cart
    cart.push({ name: itemName, price: itemPrice });
  
    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    // Confirmation alert
    alert(`${itemName} has been added to the cart!`);
  }
  
  // Display Cart Items on Checkout Page
  function displayCartItems() {
    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
  
    // Clear previous items (if any)
    cartContainer.innerHTML = "";
  
    // Generate HTML for each cart item
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price;
  
      cartContainer.innerHTML += `
        <div class="cart-item">
          <p>${index + 1}. ${item.name} - ₹${item.price}</p>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
    });
  
    // Update Total Price
    document.getElementById("total-price").innerText = `Total: ₹${total}`;
  }
  
  // Remove Item from Cart
  function removeFromCart(index) {
    // Retrieve existing cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Remove the selected item
    cart.splice(index, 1);
  
    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    // Refresh cart display
    displayCartItems();
  }
  
  // Clear Cart on Checkout Completion
  function clearCart() {
    localStorage.removeItem("cart");
    alert("Checkout completed successfully! Your cart is now empty.");
    displayCartItems();
  }
  
  // Initialize Add to Cart functionality when the page loads
  document.addEventListener("DOMContentLoaded", () => {
    initializeAddToCart();
  });
  