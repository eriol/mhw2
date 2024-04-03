const menu = document.querySelector('#menu');
const menuPanel = document.querySelector('#menu_panel');
const menuModal = document.querySelector('#menu_modal');
const menuIcon = document.querySelector('#menu img');

const MENU_OPEN = 'images/bars-solid.svg';
const MENU_CLOSE = 'images/xmark-solid.svg';

menu.addEventListener('click', onMenuClicked);

// Open and close the side menu panel.
function onMenuClicked(event) {
  event.stopPropagation();

  menuPanel.classList.toggle('hidden');
  menuModal.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
  // We use a data attribute to save the menu state in order
  // to change the menu icon.
  if (menuIcon.dataset.state === 'open') {
    menuIcon.src = MENU_CLOSE;
    menuIcon.dataset.state = 'close';
  } else {
    menuIcon.dataset.state = 'open';
    menuIcon.src = MENU_OPEN;
  }
}
