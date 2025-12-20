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
