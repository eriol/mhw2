const MENU_OPEN = 'images/bars-solid.svg';
const MENU_CLOSE = 'images/xmark-solid.svg';
const DESKTOP_RCOL_BCK_IMAGE = 'url(images/ancient-greece-horse-race.webp)';
const DESKTOP_RCOL_BCK_IMAGE2 = 'url(images/ancient-greece-boxing.webp)';

const menu = document.querySelector('#menu');
const menuPanel = document.querySelector('#menu_panel');
const menuModal = document.querySelector('#menu_modal');
const menuIcon = document.querySelector('#menu img');
const desktopRightColumn = document.querySelector('.right_column');

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

// Change desktop right column background image on mouseover
// and mouseout.
function onDesktopRightColumnMouseOver(event) {
  event.currentTarget.style.backgroundImage = DESKTOP_RCOL_BCK_IMAGE2;
}
function onDesktopRightColumnMouseOut(event) {
  event.currentTarget.style.backgroundImage = DESKTOP_RCOL_BCK_IMAGE;
}

menu.addEventListener('click', onMenuClicked);

desktopRightColumn.addEventListener('mouseover', onDesktopRightColumnMouseOver);
desktopRightColumn.addEventListener('mouseout', onDesktopRightColumnMouseOut);
