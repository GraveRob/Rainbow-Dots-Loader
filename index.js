window.addEventListener('load', function () {
    const $color = document.querySelector('#colorChanger');
    const $root = document.querySelector('html');

    $color.addEventListener('click', function () {
    let color = '#' + Math.round(Math.random() * 16777216).toString(16);
    $root.style.setProperty('--background-color', color);
    }, false);

    $animationButton = document.querySelector('#animationChanger');
    $container = document.querySelector('.container');
    $circles = document.querySelectorAll('.circle');

    $animationButton.addEventListener('click', function () {
        let state = $container.classList.toggle('container-rotate');
        for(let one of $circles) {
            one.classList.toggle('circle-rotate');
        }
        $root.style.setProperty('--pseudo-width', `${state ? 0 : '100%'}`);
    });
})
