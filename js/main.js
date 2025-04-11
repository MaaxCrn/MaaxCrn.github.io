// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const body = document.body;

// Check for saved theme preference or use system preference
const getThemePreference = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Apply theme
const applyTheme = (theme) => {
  if (theme === 'dark') {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
  localStorage.setItem('theme', theme);
};

// Initialize theme
applyTheme(getThemePreference());

// Theme toggle event listeners
const toggleTheme = () => {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
};

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

if (mobileThemeToggle) {
  mobileThemeToggle.addEventListener('click', toggleTheme);
}

document.getElementById('voirMesProjets').addEventListener('click', function() {
  document.getElementById('projetsRecents').scrollIntoView({
    behavior: 'smooth'
  });
});