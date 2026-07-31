/* content.js ko page pe inject karta hai */
(function () {
    var S = window.SITE; if (!S) return;
    var $ = function (s) { return document.querySelector(s); };
    function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; }

    var ICONS = {
        github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
        linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>',
        email: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6L22 7"/></svg>',
        phone: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
        instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
        whatsapp: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
        telegram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',
        youtube: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>',
        playstore: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
        webpage: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'
    };

    // chips
    var chips = $('#chips'); if (chips) { chips.innerHTML = ''; S.chips.forEach(function (c) { chips.appendChild(el('span', 'chip', c)); }); }
    // stats
    var stats = $('#stats'); if (stats) { stats.innerHTML = ''; S.stats.forEach(function (s) { var d = el('div', 'stat'); d.appendChild(el('b', null, s.n)); d.appendChild(el('span', null, s.l)); stats.appendChild(d); }); }
    // skills
    var skills = $('#skills'); if (skills) { skills.innerHTML = ''; S.skills.forEach(function (s) { var w = el('div', 'skill'); w.innerHTML = '<div class="s-top"><span>' + s.name + '</span><span>' + s.pct + '%</span></div><div class="bar"><i style="--w:' + s.pct + '%"></i></div>'; skills.appendChild(w); }); }
    // socials
    var soc = $('#socials'); if (soc) { soc.innerHTML = ''; S.socials.forEach(function (s) { var a = el('a', 'soc'); a.href = s.href; a.setAttribute('aria-label', s.label); a.innerHTML = ICONS[s.key] || ''; if (s.key !== 'email' && s.key !== 'phone') { a.target = '_blank'; a.rel = 'noopener'; } soc.appendChild(a); }); }
    // marquee
    var mq = $('#marquee'); if (mq) { var items = S.marquee.map(function (x) { return '<span>' + x + '<i>◆</i></span>'; }).join(''); mq.innerHTML = items + items; }
    // projects
    var pl = $('#projects-list'); if (pl) { pl.innerHTML = ''; S.projects.forEach(function (p, i) { var a = el('a', 'p-row reveal'); a.href = p.href; a.target = '_blank'; a.rel = 'noopener'; a.style.transitionDelay = (i * 0.07) + 's'; a.innerHTML = '<span class="p-num">' + p.n + '</span><div><div class="p-top"><h3>' + p.title + '</h3><span class="p-badge ' + p.tone + '">' + p.badge + '</span></div><p class="p-desc">' + p.desc + '</p><div class="p-tags">' + p.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div></div><div style="display:flex; align-items:center; gap:24px;"><img src="assets/project/' + p.n + '.svg" class="qr-img" style="width:64px; height:64px; border-radius:4px; opacity:0.85; transition:0.3s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.85" alt="Project QR"><span class="p-arrow">→</span></div>'; pl.appendChild(a); }); }
    var pc = $('#proj-count'); if (pc) pc.textContent = ('0' + S.projects.length).slice(-2) + ' PROJECTS · github.com/iq4u8';
    // education
    var edu = $('#edu'); if (edu) { edu.innerHTML = ''; S.education.forEach(function (e) { var li = el('li'); li.innerHTML = '<span class="yr">' + e.yr + '</span><div><b>' + e.title + '</b><span>' + e.sub + '</span></div>'; edu.appendChild(li); }); }
    // certs
    var certs = $('#certs'); if (certs) { certs.innerHTML = ''; S.certs.forEach(function (c) { var li = el('li'); li.innerHTML = '<b>✓</b> ' + c.title + ' <em>— ' + c.by + '</em>'; certs.appendChild(li); }); }

    if (window.__observeReveals) window.__observeReveals();
})();