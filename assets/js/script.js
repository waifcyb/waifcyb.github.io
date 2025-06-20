document.querySelectorAll('.toggle-panel').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = btn.dataset.target;
    const panel = document.getElementById(targetId);
    const isOpen = panel.classList.contains('open');
    document.querySelectorAll('.panel').forEach((p) => p.classList.remove('open'));
    if (!isOpen) panel.classList.add('open');
  });
});

document.querySelectorAll('.panel .close').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.panel').classList.remove('open');
  });
});
