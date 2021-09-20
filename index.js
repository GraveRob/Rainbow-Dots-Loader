const $color = document.querySelector('#colorChanger');
const $root = document.querySelector('html');

$color.addEventListener('click', function () {
    let color = '#' + Math.round(Math.random() * 16777216).toString(16);
    $root.style.setProperty('--background-color', color);
}, false);