// ECOREnt Interactive Behaviors & Micro-interactions
document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close others in same column if desired, or toggle
        item.classList.toggle('open', !isOpen);
      });
    }
  });

  // 2. Animated Number Counters (Trust stats)
  const counters = document.querySelectorAll('.trust-num[data-target]');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        let current = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target.toLocaleString('vi-VN') + '+';
            clearInterval(timer);
          } else {
            el.textContent = current.toLocaleString('vi-VN') + '+';
          }
        }, 30);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));

  // 3. Demo Modal / Play Video notification
  const demoBtn = document.getElementById('btnPlayDemo');
  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      alert('Video demo giới thiệu ECOREnt (2 phút) đang chuẩn bị phát.');
    });
  }

  // 4. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
