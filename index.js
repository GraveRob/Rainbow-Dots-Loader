const $range = document.querySelector('#colorChanger');
const $root = document.querySelector('html');

$range.addEventListener('mousemove', function () {
    let color = "#" + (this.value & 0x00FFFFFF).toString(16).padStart(6, '0');
    $root.style.setProperty('--background-color', color);
}, false);