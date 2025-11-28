// This file contains the JavaScript code that adds interactivity to the portfolio site.

(function(){
    const filterButtons = document.querySelectorAll('.filter-button');
    window.filterProjects = window.filterProjects || function(category){
        // call existing filter logic if present
        if (typeof window.filterProjects === 'function') {
            try {
                window.filterProjectsOriginal && window.filterProjectsOriginal(category);
            } catch(e){}
        }
    };

    // toggle active class on filter buttons
    document.querySelectorAll('.projects-controls').forEach(ctrl => {
        ctrl.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-button');
            if (!btn) return;
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // call the real filter implemented in script.js
            if (typeof window.filterProjects === 'function') {
                window.filterProjects(btn.textContent === 'ทั้งหมด' ? 'all' : btn.textContent === 'เว็บ' ? 'web' : btn.textContent === 'มือถือ' ? 'mobile' : 'data');
            }
        });
    });

    // hamburger toggle: toggle class + aria-expanded
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        function toggleMenu(){
            const active = navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', active ? 'true' : 'false');
        }
        hamburger.addEventListener('click', toggleMenu);
        // close menu when link clicked
        navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) toggleMenu();
        }));
    }
})();