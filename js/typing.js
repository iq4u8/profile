(function () {
    var roles = (window.SITE && window.SITE.roles) || ["Web Developer", "Creative Coder"];
    var ri = 0, ci = 0, del = false, t = document.getElementById('typed'); if (!t) return;
    (function tick() {
        var w = roles[ri]; t.textContent = w.slice(0, ci);
        if (!del && ci < w.length) { ci++; setTimeout(tick, 70); }
        else if (!del) { del = true; setTimeout(tick, 1700); }
        else if (ci > 0) { ci--; setTimeout(tick, 36); }
        else { del = false; ri = (ri + 1) % roles.length; setTimeout(tick, 350); }
    })();
})();