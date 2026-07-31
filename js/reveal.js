(function () {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { threshold: .15 });
    window.__observeReveals = function () { document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { io.observe(el); }); };
    window.__observeReveals();

    var bar = document.getElementById('progress');
    addEventListener('scroll', function () {
        var h = document.documentElement, p = h.scrollTop / ((h.scrollHeight - h.clientHeight) || 1);
        if (bar) bar.style.transform = 'scaleX(' + p + ')';
    }, { passive: true });

    var ready = function () { document.body.classList.add('loaded'); };
    addEventListener('load', ready); setTimeout(ready, 700);
})();