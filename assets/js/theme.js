(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  if (!toggle) return;

  function updateToggle(theme) {
    var nextTheme = theme === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', 'Switch to ' + nextTheme + ' mode');
    toggle.setAttribute('title', 'Switch to ' + nextTheme + ' mode');
    toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  updateToggle(root.dataset.theme);

  toggle.addEventListener('click', function () {
    var theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = theme;
    updateToggle(theme);

    try {
      localStorage.setItem('theme', theme);
    } catch (error) {}
  });
}());
