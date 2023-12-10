document.addEventListener('DOMContentLoaded', function () {
    var fadeText = document.querySelector('.fade-in-text h1');
    fadeText.style.opacity = 0;

    var fadeIn = function () {
        var fadeInEffect = setInterval(function () {
            if (fadeText.style.opacity < 1) {
                fadeText.style.opacity = parseFloat(fadeText.style.opacity) + 0.01;
            } else {
                clearInterval(fadeInEffect);
            }
        }, 10);
    };

    fadeIn();
});


