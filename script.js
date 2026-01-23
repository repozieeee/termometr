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

// ГАЛЕРЕЯ
const galleryTrack = document.getElementById('galleryTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if(galleryTrack && prevBtn && nextBtn){
    let currentIndex = 0;
    const items = galleryTrack.querySelectorAll('.gallery-item');
    const itemWidth = items[0].offsetWidth + 20; // 20px margin
    function updateGallery() {
        galleryTrack.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }
    prevBtn.onclick = () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateGallery();
    }
    nextBtn.onclick = () => {
        currentIndex = Math.min(currentIndex + 1, items.length - 1);
        updateGallery();
    }
}
