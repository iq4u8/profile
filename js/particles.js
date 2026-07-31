(function () {
    var rm = matchMedia('(prefers-reduced-motion: reduce)').matches; if (rm) return;
    var root = document.documentElement;
    var cv = document.getElementById('bg'), cx = cv.getContext('2d'); if (!cv) return;
    var W, H, rs = function () { W = cv.width = innerWidth; H = cv.height = innerHeight; };
    rs(); addEventListener('resize', rs);
    var P = []; for (var i = 0, N = Math.min(90, innerWidth / 13); i < N; i++)
        P.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: .8 + Math.random() * 1.8, vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28, c: Math.floor(Math.random() * 3), p: Math.random() * 6.28, s: .5 + Math.random() * 1.5 });
    var pal = { dark: ['61,220,247', '255,180,84', '62,242,176'], light: ['8,145,178', '217,119,6', '5,150,105'] };
    (function draw(t) {
        requestAnimationFrame(draw); if (document.hidden) return;
        cx.clearRect(0, 0, W, H); var cols = pal[root.dataset.theme] || pal.dark;
        for (var k = 0; k < P.length; k++) {
            var p = P[k];
            p.x += p.vx; p.y += p.vy;
            if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10;
            if (p.y < -10) p.y = H + 10; if (p.y > H + 10) p.y = -10;
            var a = .22 + .34 * (0.5 + 0.5 * Math.sin(t / 1000 * p.s + p.p));
            cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 7); cx.fillStyle = 'rgba(' + cols[p.c] + ',' + a + ')'; cx.fill();
        }
    })(0);
})();