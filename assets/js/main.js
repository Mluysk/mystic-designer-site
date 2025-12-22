(function() {
  const bar = document.querySelector('.sticky-bar');
  const placeholder = document.querySelector('.sticky-placeholder');
  if (!bar || !placeholder) return;

  let barTop = bar.offsetTop;

  const updatePlaceholder = () => {
    if (bar.classList.contains('fixed')) {
      placeholder.style.height = `${bar.offsetHeight}px`;
    } else {
      placeholder.style.height = '0px';
    }
  };

  const onScroll = () => {
    if (window.scrollY > barTop) {
      if (!bar.classList.contains('fixed')) {
        bar.classList.add('fixed');
        updatePlaceholder();
      }
    } else {
      if (bar.classList.contains('fixed')) {
        bar.classList.remove('fixed');
        updatePlaceholder();
      }
    }
  };

  const onResize = () => {
    barTop = bar.offsetTop;
    updatePlaceholder();
    onScroll();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);

  updatePlaceholder();
})();

(function() {
  const yearTarget = document.getElementById('current-year');
  if (!yearTarget) return;
  yearTarget.textContent = new Date().getFullYear();
})();

(function() {
  const menuToggleButtons = document.querySelectorAll('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!mobileMenu || !menuToggleButtons.length) return;

  const setMenuState = (open) => {
    mobileMenu.hidden = !open;
    mobileMenu.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    menuToggleButtons.forEach((btn) => {
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  };

  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.contains('open');
    setMenuState(!isOpen);
  };

  menuToggleButtons.forEach((btn) => btn.addEventListener('click', toggleMenu));

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
      setMenuState(false);
    }
  });
})();
