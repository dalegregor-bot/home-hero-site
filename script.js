// Mobile nav clone/toggle
const btn = document.querySelector('.nav-toggle');
const mobile = document.getElementById('mobileNav');
const links = document.querySelector('.nav-links')?.cloneNode(true);
if (links && mobile) mobile.appendChild(links);

btn?.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  mobile.style.display = expanded ? 'none' : 'block';
});
