document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.filter = 'blur(2px)';
            setTimeout(() => {
                link.style.filter = 'none';
            }, 300);
        });

        link.addEventListener('mouseout', () => {
            link.style.filter = 'none';
        });
    });
});
