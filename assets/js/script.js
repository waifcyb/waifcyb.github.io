document.querySelectorAll('.toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const wrapper = btn.parentElement;
    wrapper.classList.toggle('open');
  });
});

document.querySelectorAll('.panel .close').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.closest('.sticker-wrapper').classList.remove('open');
  });
});

// floating decorative emojis
const decorEmojis = ['🍓','😼','💞','🤍','💤','🌀','🍔','👒','🧤','🌐'];
decorEmojis.forEach(char => {
  const d = document.createElement('div');
  d.className = 'decor';
  d.textContent = char;
  d.style.top = Math.random() * 90 + '%';
  d.style.left = Math.random() * 90 + '%';
  document.body.appendChild(d);
});