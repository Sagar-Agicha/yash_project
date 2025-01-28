document.addEventListener('DOMContentLoaded', () => {
  // Add transition overlay
  const overlay = document.querySelector('.transition-overlay');
  const heart = document.querySelector('.transition-heart');
  
  // Handle all link clicks
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      // Only handle links to other pages (not anchors or external links)
      const href = link.getAttribute('href');
      if (href && href.startsWith('/') || href.includes(window.location.origin)) {
        e.preventDefault();
        
        // Activate transition
        overlay.classList.add('transition-active');
        heart.classList.add('heart-active');
        
        // Navigate to new page after animation
        setTimeout(() => {
          window.location.href = href;
        }, 750); // Half of the animation duration
      }
    });
  });
});

// Add this to your destination pages to handle entrance animation
window.addEventListener('pageshow', () => {
  const overlay = document.querySelector('.transition-overlay');
  const heart = document.querySelector('.transition-heart');
  
  // Reset classes
  overlay.classList.remove('transition-active');
  heart.classList.remove('heart-active');
}); 