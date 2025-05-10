// Carrega o botão na div container
fetch('components/theme-toggle.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('theme-toggle-container').innerHTML = html;

    const btn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');

    // Carrega o modo salvo
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
      icon.classList.add('rotate');
    }

    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      icon.classList.toggle('rotate');

      // Salva a preferência
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  });
