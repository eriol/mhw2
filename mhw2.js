
const menu = document.querySelector('#menu');
const menuPanel = document.querySelector('#menu_panel');

menu.addEventListener('click', onMenuClicked);

function onMenuClicked(event) {
    console.log('menu clicked');
    event.stopPropagation();
    menuPanel.classList.toggle('hidden');
}
