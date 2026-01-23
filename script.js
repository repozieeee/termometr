// МОДАЛКА ЗАКАЗ
const orderModal = document.getElementById('orderModal');
const openOrder = document.getElementById('openOrder');
const closeOrder = document.getElementById('closeOrder');

openOrder.onclick = () => orderModal.style.display = 'flex';
closeOrder.onclick = () => orderModal.style.display = 'none';

// МОДАЛКА ПРОДУКТ
const productBtn = document.getElementById('productBtn');
const productModal = document.getElementById('productModal');
const closeProduct = document.getElementById('closeProduct');

productBtn.onclick = () => productModal.style.display = 'flex';
closeProduct.onclick = () => productModal.style.display = 'none';

// ТЕРМОМЕТР
const thermoFill = document.querySelector('.thermo-fill');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = Math.min(scrollTop / docHeight, 1);
  thermoFill.style.height = `${100 - progress * 100}%`;
});
