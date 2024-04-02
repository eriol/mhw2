const menu = document.querySelector('#menu');
const menuPanel = document.querySelector('#menu_panel');
const menuModal = document.querySelector('#menu_modal');

menu.addEventListener('click', onMenuClicked);

function onMenuClicked(event) {
  event.stopPropagation();
  menuPanel.classList.toggle('hidden');
  menuModal.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}
