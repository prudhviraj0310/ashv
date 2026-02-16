/* ============================================
   TAC HOSPITALITY — PREMIUM JAVASCRIPT
   Cinematic Interactions · Particle Canvas · Split Text
   ============================================ */

(function() {
  'use strict';

  // --- Loader ---
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.remove('loading');
      initHeroAnimations();
    }, 2600);
  });

  // --- Custom Cursor ---
  const cursorDot = document.getElementById('cursorDot');
  if (cursorDot && window.innerWidth > 768) {
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!cursorDot.classList.contains('visible')) {
        cursorDot.classList.add('visible');
      }
    });

    function animateCursor() {
      dotX += (mouseX - dotX) * 0.15;
      dotY += (mouseY - dotY) * 0.15;
      cursorDot.style.left = dotX + 'px';
      cursorDot.style.top = dotY + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover expansion on interactive elements
    document.querySelectorAll('a, button, .focus-card, .metric-card, .who-we-work__tab, .service-card__header').forEach(el => {
      el.addEventListener('mouseenter', () => cursorDot.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursorDot.classList.remove('hover'));
    });
  }

  // --- Scroll Progress ---
  const scrollProgress = document.getElementById('scrollProgress');
  function updateScrollProgress() {
    if (!scrollProgress) return;
    const scrolled = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const pct = height > 0 ? (scrolled / height) * 100 : 0;
    scrollProgress.style.width = pct + '%';
  }

  // --- Navigation ---
  const nav = document.getElementById('nav');
  const hero = document.getElementById('hero');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  function handleNavScroll() {
    if (!nav) return;
    if (hero) {
      nav.classList.toggle('scrolled', window.scrollY > 80);
    } else {
      nav.classList.add('scrolled');
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      if (navOverlay) navOverlay.classList.toggle('active');
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      navOverlay.classList.remove('active');
    });
  }

  // --- Sticky CTA ---
  const stickyCta = document.getElementById('stickyCta');
  function handleStickyCta() {
    if (!stickyCta) return;
    stickyCta.classList.toggle('visible', window.scrollY > window.innerHeight * 0.8);
  }

  // --- Throttled Scroll ---
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollProgress();
        handleNavScroll();
        handleStickyCta();
        ticking = false;
      });
      ticking = true;
    }
  });

  handleNavScroll();

  // --- Particle Canvas ---
  function initParticles() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let w, h;

    function resize() {
      w = canvas.width = canvas.parentElement.offsetWidth;
      h = canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulsePhase += this.pulseSpeed;

        if (this.x < -10) this.x = w + 10;
        if (this.x > w + 10) this.x = -10;
        if (this.y < -10) this.y = h + 10;
        if (this.y > h + 10) this.y = -10;
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 169, 110, ${this.opacity * pulse})`;
        ctx.fill();
      }
    }

    // Create particles
    const count = Math.min(Math.floor((w * h) / 12000), 120);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    // Draw connections
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(201, 169, 110, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      requestAnimationFrame(animate);
    }

    animate();
  }

  initParticles();

  // --- Hero Split Text Animation ---
  function initHeroAnimations() {
    const lineInners = document.querySelectorAll('.hero__title .line-inner');
    const label = document.querySelector('.hero__label');
    const tagline = document.querySelector('.hero__tagline');
    const subtitle = document.querySelector('.hero__subtitle');
    const ctas = document.querySelector('.hero__ctas');
    const metrics = document.querySelector('.hero__metrics');

    let delay = 0;

    lineInners.forEach((line, i) => {
      setTimeout(() => {
        line.classList.add('visible');
      }, delay + i * 200);
    });

    delay += lineInners.length * 200 + 200;

    if (label) setTimeout(() => label.classList.add('animate'), delay);
    delay += 150;
    if (tagline) setTimeout(() => tagline.classList.add('animate'), delay);
    delay += 150;
    if (subtitle) setTimeout(() => subtitle.classList.add('animate'), delay);
    delay += 150;
    if (ctas) setTimeout(() => ctas.classList.add('animate'), delay);
    delay += 200;
    if (metrics) setTimeout(() => metrics.classList.add('animate'), delay);
  }

  // --- Magnetic Buttons ---
  document.querySelectorAll('.magnetic-wrap').forEach(wrap => {
    const btn = wrap.querySelector('.btn');
    if (!btn || window.innerWidth < 768) return;

    wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    wrap.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
      btn.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      setTimeout(() => { btn.style.transition = ''; }, 500);
    });
  });

  // --- Scroll Reveal (IntersectionObserver) ---
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Trigger counter animation if card has data-count
          entry.target.querySelectorAll('[data-count]').forEach(counter => {
            animateCounter(counter);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '-50px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

  initScrollReveal();

  // --- Counter Animation ---
  function animateCounter(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = 'true';

    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 2200;
    const start = performance.now();

    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const current = Math.round(eased * target);

      el.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // Also observe standalone counters (metric cards, value cards, etc.)
  const allCounters = document.querySelectorAll('[data-count]');
  if (allCounters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    allCounters.forEach(el => counterObserver.observe(el));
  }

  // --- Process Accordion ---
  function initProcessSteps() {
    const steps = document.querySelectorAll('.process__step');
    if (!steps.length) return;

    steps.forEach(step => {
      step.addEventListener('click', () => {
        const isActive = step.classList.contains('active');
        steps.forEach(s => s.classList.remove('active'));
        if (!isActive) step.classList.add('active');
      });
    });
  }

  initProcessSteps();

  // --- Who We Work With Tabs ---
  function initWhoTabs() {
    const tabContainer = document.getElementById('whoTabs');
    const contentContainer = document.getElementById('whoContent');
    if (!tabContainer || !contentContainer) return;

    const tabData = {
      independent: {
        cards: [
          { icon: '🎯', title: 'Key Challenge', text: 'Competing against branded chains without corporate support, systems, or structured revenue management.' },
          { icon: '⚡', title: 'Our Focus', text: 'Brand positioning, pricing strategy, OTA optimization, and building operational systems that rival chain efficiency.' },
          { icon: '📈', title: 'Typical Outcome', text: '25–35% revenue growth, stronger brand identity, and dramatically improved online reputation.' }
        ]
      },
      boutique: {
        cards: [
          { icon: '🎯', title: 'Key Challenge', text: 'Monetizing unique character and heritage value without losing authenticity or over-commercializing the experience.' },
          { icon: '⚡', title: 'Our Focus', text: 'Experience-led pricing, niche market targeting, storytelling-driven marketing, and curated guest journey design.' },
          { icon: '📈', title: 'Typical Outcome', text: '40% ADR increase, premium positioning in niche segments, and improved guest satisfaction scores.' }
        ]
      },
      resorts: {
        cards: [
          { icon: '🎯', title: 'Key Challenge', text: 'Seasonal demand fluctuations, high operational costs, and difficulty driving repeat visits during off-peak.' },
          { icon: '⚡', title: 'Our Focus', text: 'Yield management across seasons, ancillary revenue programs, F&B optimization, and activity packaging strategies.' },
          { icon: '📈', title: 'Typical Outcome', text: '20% improvement in off-season occupancy, 30% increase in per-guest revenue through upselling programs.' }
        ]
      },
      business: {
        cards: [
          { icon: '🎯', title: 'Key Challenge', text: 'Rate pressure from corporate negotiations, high dependency on few key accounts, thin margins on high volume.' },
          { icon: '⚡', title: 'Our Focus', text: 'Corporate rate optimization, MICE revenue maximization, loyalty program design, and operational cost efficiency.' },
          { icon: '📈', title: 'Typical Outcome', text: '15% improvement in corporate rate yield, diversified revenue mix, and improved GOP by 12–15%.' }
        ]
      },
      'new-openings': {
        cards: [
          { icon: '🎯', title: 'Key Challenge', text: 'Building from scratch — defining brand, hiring teams, establishing systems, and entering market with zero reputation.' },
          { icon: '⚡', title: 'Our Focus', text: 'Pre-opening playbook, brand development, team recruitment & training, SOP creation, and launch marketing strategy.' },
          { icon: '📈', title: 'Typical Outcome', text: '40% faster ramp-up to breakeven, fully trained team from Day 1, strong market entry positioning.' }
        ]
      },
      turnaround: {
        cards: [
          { icon: '🎯', title: 'Key Challenge', text: 'Properties bleeding money with broken operations, demoralized teams, poor reviews, and declining occupancy.' },
          { icon: '⚡', title: 'Our Focus', text: 'Emergency diagnostics, cost restructuring, team rebuilding, revenue recovery, and reputation management.' },
          { icon: '📈', title: 'Typical Outcome', text: 'Path to profitability within 90–120 days, stabilized operations, and restored team confidence and morale.' }
        ]
      }
    };

    function renderTab(tabKey) {
      const data = tabData[tabKey];
      if (!data) return;

      contentContainer.style.opacity = '0';
      contentContainer.style.transform = 'translateY(10px)';

      setTimeout(() => {
        contentContainer.innerHTML = data.cards.map(card => `
          <div class="who-we-work__card">
            <div class="who-we-work__card-icon">${card.icon}</div>
            <h4>${card.title}</h4>
            <p>${card.text}</p>
          </div>
        `).join('');

        contentContainer.style.opacity = '1';
        contentContainer.style.transform = 'translateY(0)';
      }, 300);
    }

    // Initial render
    renderTab('independent');

    // Tab clicks
    tabContainer.addEventListener('click', (e) => {
      const tab = e.target.closest('.who-we-work__tab');
      if (!tab) return;

      tabContainer.querySelectorAll('.who-we-work__tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderTab(tab.dataset.tab);
    });
  }

  initWhoTabs();

  // --- Service Cards Accordion ---
  function initServiceCards() {
    const cards = document.querySelectorAll('.service-card__header');
    if (!cards.length) return;

    cards.forEach(header => {
      header.addEventListener('click', () => {
        const card = header.closest('.service-card');
        const isActive = card.classList.contains('active');

        document.querySelectorAll('.service-card').forEach(c => c.classList.remove('active'));
        if (!isActive) card.classList.add('active');
      });
    });
  }

  initServiceCards();

  // --- Contact Form ---
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('.btn');
      const originalText = btn.textContent;

      btn.textContent = 'Sending...';
      btn.style.opacity = '0.7';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = '✓ Sent Successfully';
        btn.style.opacity = '1';
        btn.style.background = '#2a9d5c';

        setTimeout(() => {
          form.reset();
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }

  initContactForm();

  // --- Smooth Anchor Scrolling ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Parallax on About Visual ---
  function initParallax() {
    const visual = document.querySelector('.about-intro__image-wrap');
    if (!visual || window.innerWidth < 768) return;

    window.addEventListener('scroll', () => {
      const rect = visual.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        const offset = (rect.top - window.innerHeight / 2) * 0.06;
        visual.style.transform = `translateY(${offset}px)`;
      }
    });
  }

  initParallax();

})();
