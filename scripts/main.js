(() => {
  const menuButton = document.getElementById('menu-toggle');
  const navigation = document.getElementById('site-nav');
  menuButton?.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
  }));
  const themeButton = document.getElementById('theme-toggle');
  const stored = (() => { try { return localStorage.getItem('nirmal-theme'); } catch { return null; } })();
  if (stored === 'light') document.body.classList.add('light');
  function updateThemeLabel() {
    themeButton?.setAttribute('aria-label', document.body.classList.contains('light') ? 'Switch to dark theme' : 'Switch to light theme');
  }
  updateThemeLabel();
  themeButton?.addEventListener('click', () => {
    document.body.classList.toggle('light');
    try { localStorage.setItem('nirmal-theme', document.body.classList.contains('light') ? 'light' : 'dark'); } catch {}
    updateThemeLabel();
  });
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
