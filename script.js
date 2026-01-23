const orderModal = document.getElementById('orderModal');
const openOrder = document.getElementById('openOrder');
const closeOrder = document.getElementById('closeOrder');

openOrder.onclick = () => {
  orderModal.style.display = 'flex';
};

closeOrder.onclick = () => {
  orderModal.style.display = 'none';
};

const thermoFill = document.querySelector('.thermo-fill');
const thermoLabel = document.querySelector('.thermo-label');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = Math.min(scrollTop / docHeight, 1);

  const temp = Math.round(30 - progress * 60); // от +30 до -30
  thermoFill.style.height = `${100 - progress * 100}%`;
  thermoLabel.textContent = `${temp}°C`;
});

const featuresSection = document.querySelector('.features');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    featuresSection.classList.add('active');
  });

  card.addEventListener('mouseleave', () => {
    featuresSection.classList.remove('active');
  });
});

const previewBtn = document.querySelector('.hero .btn');
const preview = document.getElementById('productPreview');

previewBtn.onclick = () => {
  preview.classList.toggle('open');
};
