(function () {
    var rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fine = matchMedia('(pointer: fine)').matches;
    var wrap = document.querySelector('.card-wrap'), tilt = document.querySelector('.card-tilt');
    if (fine && !rm && wrap && tilt) {
        wrap.addEventListener('pointermove', function (e) {
            var r = wrap.getBoundingClientRect();
            var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
            tilt.style.transform = 'rotateY(' + ((px - .5) * 16) + 'deg) rotateX(' + ((.5 - py) * 13) + 'deg)';
            tilt.style.setProperty('--mx', px * 100 + '%'); tilt.style.setProperty('--my', py * 100 + '%');
        });
        wrap.addEventListener('pointerleave', function () { tilt.style.transform = 'rotateY(0) rotateX(0)'; });
    }
    var card = document.getElementById('card');
    if (card) {
        card.addEventListener('click', function (e) { if (e.target.closest('a')) return; card.classList.toggle('flipped'); });
        card.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.classList.toggle('flipped'); } });
    }
    if (fine && !rm) document.querySelectorAll('.btn').forEach(function (b) {
        b.addEventListener('pointermove', function (e) { var r = b.getBoundingClientRect(); b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * .12) + 'px,' + ((e.clientY - r.top - r.height / 2) * .26) + 'px)'; });
        b.addEventListener('pointerleave', function () { b.style.transform = ''; });
    });
})();