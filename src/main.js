import './css/variables.css'
import './css/global.css'
import './css/components.css'

document.addEventListener('DOMContentLoaded', () => {
  // Page Transition Logic
  const transitionEl = document.getElementById('page-transition');
  
  if (transitionEl) {
    // Reveal page on load
    setTimeout(() => {
      transitionEl.classList.add('loaded');
    }, 100);
  }

  // Handle all internal links for transition out
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');
      
      // Only transition on internal pages (not hashes or external)
      if (target && target.includes('.html') && transitionEl) {
        e.preventDefault();
        
        // Remove loaded class to trigger wipe animation
        transitionEl.classList.remove('loaded');
        
        // Navigate after animation (500ms match css transition)
        setTimeout(() => {
          window.location.href = target;
        }, 500);
      }
    });
  });

  // Scroll Reveal Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Optional: stop observing once revealed
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Target elements to animate on scroll
  const animatedElements = document.querySelectorAll('.card-comic-panel, .card-polaroid, .sticker, .stamp-red, .doodle');
  animatedElements.forEach(el => observer.observe(el));

  // Formspree Integration Logic
  const handleFormSubmit = async (e, type) => {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    
    // Loading State
    btn.disabled = true;
    btn.style.opacity = '0.8';
    btn.style.cursor = 'not-allowed';
    btn.innerHTML = 'Sending... <svg class="mascot-float" style="width: 24px; height: 24px; vertical-align: middle; margin-left: 8px;" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" stroke-width="4" transform="rotate(-20 50 50)"/><circle cx="50" cy="50" r="30" fill="transparent" stroke="currentColor" stroke-width="3"/></svg>';

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success State
        const successHtml = type === 'creator' 
          ? `<div class="card-comic-panel in-view" style="text-align: center; padding: var(--spacing-xl); background: var(--color-paper); border-color: var(--color-accent-yellow);">
              <h2 style="font-size: 3rem; margin-bottom: var(--spacing-md); color: var(--color-ink); text-shadow: var(--shadow-hard);">WELCOME TO THE ORBIT 🚀</h2>
              <p class="editorial" style="font-size: 1.5rem; margin-bottom: var(--spacing-lg); color: var(--color-ink);">Your creator profile has been received.<br/><br/>We'll reach out whenever we find a campaign that matches your content.</p>
              <a href="/index.html" class="magnetic-btn blue">BACK TO HOME</a>
            </div>`
          : `<div class="card-comic-panel in-view" style="text-align: center; padding: var(--spacing-xl); background: var(--color-paper); border-color: var(--color-accent-blue);">
              <h2 style="font-size: 3rem; margin-bottom: var(--spacing-md); color: var(--color-ink); text-shadow: var(--shadow-hard);">MESSAGE RECEIVED ✨</h2>
              <p class="editorial" style="font-size: 1.5rem; margin-bottom: var(--spacing-lg); color: var(--color-ink);">Thanks for reaching out.<br/><br/>We'll review your campaign and get back to you soon.</p>
              <a href="/index.html" class="magnetic-btn red">BACK TO HOME</a>
            </div>`;
        form.outerHTML = successHtml;
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      // Error State
      const errorHtml = `<div class="card-comic-panel in-view" style="text-align: center; padding: var(--spacing-xl); background: var(--color-accent-red); color: white;">
          <h2 style="font-size: 3rem; margin-bottom: var(--spacing-md); color: white; text-shadow: var(--shadow-hard);">UH OH.</h2>
          <p class="editorial" style="font-size: 1.5rem; margin-bottom: var(--spacing-lg);">Something went wrong.<br/><br/>Please try again in a moment or email us directly at:<br/><strong>clouterry@gmail.com</strong></p>
        </div>`;
      form.outerHTML = errorHtml;
    }
  };

  const creatorForm = document.getElementById('creator-form');
  if (creatorForm) creatorForm.addEventListener('submit', (e) => handleFormSubmit(e, 'creator'));

  const brandForm = document.getElementById('brand-form');
  if (brandForm) brandForm.addEventListener('submit', (e) => handleFormSubmit(e, 'brand'));
});
