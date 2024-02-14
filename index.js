document.addEventListener('DOMContentLoaded', function() {
    var containers = document.querySelectorAll('.container');
    containers.forEach(function(container) {
        container.addEventListener('mouseenter', function() {
            var cards = document.querySelectorAll('.card');
            cards.forEach(function(card) {
                animate(card, -90);
            });
        });

        container.addEventListener('mouseleave', function() {
            var cards = document.querySelectorAll('.card');
            cards.forEach(function(card) {
                animate(card, 0);
            });
        });
    });
});

function animate(element, topValue) {
    var start = performance.now();
    var duration = 1000; // 1 second

    function step(timestamp) {
        var progress = timestamp - start;
        element.style.top = easeInOutQuad(progress, parseFloat(element.style.top), topValue, duration) + 'px';
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }
    
    window.requestAnimationFrame(step);
}

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}
