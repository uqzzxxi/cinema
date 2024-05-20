const trailer = document.querySelector('.trailer');
const btn = document.querySelector('.btn-primary');
const details = document.querySelector('.movie-details');
const iframe = document.getElementById('trailer-video');
const originalSrc = iframe.src;

document.addEventListener('click', function(event) {
    if (!event.target.closest('.trailer iframe') && !event.target.closest('.btn')) {
        trailer.style.display = 'none';
        details.style.display = 'flex';
        iframe.src = '';
    }
});

btn.addEventListener('click', (event) => {
    event.stopPropagation();
    trailer.style.display = 'block';
    details.style.display = 'none';
    iframe.src = originalSrc;
});