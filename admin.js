
const correctCode = "vastra123";
const orders = JSON.parse(localStorage.getItem("orders") || "[]");

function checkAdmin() {
  const input = document.getElementById("adminCode").value;
  if (input === correctCode) {
    document.getElementById("adminSection").style.display = "block";
    loadOrders();
  } else {
    alert("Wrong code!");
  }
}

function loadOrders() {
  const list = document.getElementById("ordersList");
  orders.forEach((order, index) => {
    const item = document.createElement("li");
    item.innerHTML = `${order.product} - ${order.phone} - ${order.status}
      <button onclick="updateStatus(${index})">Mark Delivered</button>`;
    list.appendChild(item);
  });
}

function updateStatus(index) {
  orders[index].status = "Delivered";
  localStorage.setItem("orders", JSON.stringify(orders));
  alert("Marked as Delivered");
  location.reload();
}
