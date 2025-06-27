
function startOrder(product, price) {
  const phone = prompt("Enter your phone number for OTP:");
  if (!phone || phone.length < 10) return alert("Invalid number!");

  const otp = Math.floor(1000 + Math.random() * 9000);
  alert("OTP sent: " + otp);
  const userOtp = prompt("Enter the OTP:");
  if (userOtp == otp) {
    saveOrder(product, phone);
    alert("Order placed! We will contact you soon.");
  } else {
    alert("Incorrect OTP.");
  }
}

function saveOrder(product, phone) {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  orders.push({ product, phone, status: "Placed" });
  localStorage.setItem("orders", JSON.stringify(orders));
}
