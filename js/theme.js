(function () {
    var root = document.documentElement, saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) { }
    root.dataset.theme = saved || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.getElementById('themeToggle').addEventListener('click', function () {
        var t = root.dataset.theme === 'dark' ? 'light' : 'dark';
        root.dataset.theme = t; try { localStorage.setItem('theme', t); } catch (e) { }
    });
})();