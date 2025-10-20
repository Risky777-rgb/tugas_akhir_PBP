document.addEventListener('DOMContentLoaded', () => {
    
    // --- Portofolio Filter Logic (Menggunakan d-none Bootstrap) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-grid > div'); 

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;

            projectCards.forEach(col => {
                const cardClasses = col.classList; 
        
                if (category === 'all' || cardClasses.contains(category)) {
                    col.classList.remove('d-none');
                } else {
                    col.classList.add('d-none');
                }
            });
        });
    });

    // --- Smooth Scroll for Explore Button (Home Page) ---
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const featuredWorkSection = document.querySelector('.featured-work');
            if (featuredWorkSection) {
                featuredWorkSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // --- Active Nav Link based on URL ---
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
