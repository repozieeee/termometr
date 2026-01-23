const orderModal = document.getElementById('orderModal');
const openOrder = document.getElementById('openOrder');
const closeOrder = document.getElementById('closeOrder');

openOrder.onclick = () => {
  orderModal.style.display = 'flex';
};

closeOrder.onclick = () => {
  orderModal.style.display = 'none';
};
