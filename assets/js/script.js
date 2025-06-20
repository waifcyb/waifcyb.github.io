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
