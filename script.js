// Menu mobile: mở/đóng bằng nút ☰ trên điện thoại.
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => document.querySelector('.nav')?.classList.remove('open'));
});
