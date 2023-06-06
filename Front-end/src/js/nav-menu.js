const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', toggleMenu);

function toggleMenu() {
   const menuItems = document.querySelectorAll('.item');

   menuItems.forEach((ele) => {
      ele.classList.toggle('active');
   });
};