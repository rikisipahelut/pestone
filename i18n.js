// PestOne i18n Engine
const sharedTranslations = {
  id: {
    'nav.services': 'Layanan', 'nav.about': 'Tentang', 'nav.quality': 'Keunggulan',
    'nav.contact': 'Kontak', 'nav.quote': 'Minta Penawaran',
    'd.nav.services': 'Layanan', 'd.nav.quote': 'Minta Penawaran',
    'bc.home': 'Beranda', 'bc.services': 'Layanan',
    'd.why': 'Mengapa Berbahaya', 'd.process': 'Proses Kami',
    'd.faq': 'FAQ', 'd.faq.title': 'Pertanyaan Umum',
    'd.consult': 'Konsultasi Gratis', 'd.consult.now': 'Konsultasi Sekarang',
    'd.other': 'Lihat Layanan Lain',
    'svc.more': 'Selengkapnya',
    'f.copy': '© 2024 PestOne Pest Management. All rights reserved.',
    'f.privacy': 'Privacy Policy', 'f.terms': 'Terms of Service',
    'f.services': 'Layanan', 'f.contact': 'Kontak',
  },
  en: {
    'nav.services': 'Services', 'nav.about': 'About', 'nav.quality': 'Quality',
    'nav.contact': 'Contact', 'nav.quote': 'Request Quote',
    'd.nav.services': 'Services', 'd.nav.quote': 'Request Quote',
    'bc.home': 'Home', 'bc.services': 'Services',
    'd.why': 'Why It\'s Dangerous', 'd.process': 'Our Process',
    'd.faq': 'FAQ', 'd.faq.title': 'Common Questions',
    'd.consult': 'Free Consultation', 'd.consult.now': 'Consult Now',
    'd.other': 'View Other Services',
    'svc.more': 'Learn More',
    'f.copy': '© 2024 PestOne Pest Management. All rights reserved.',
    'f.privacy': 'Privacy Policy', 'f.terms': 'Terms of Service',
    'f.services': 'Services', 'f.contact': 'Contact',
  }
};

function applyLang(lang) {
  const t = (typeof pageTranslations !== 'undefined')
    ? { id: Object.assign({}, sharedTranslations.id, pageTranslations.id),
        en: Object.assign({}, sharedTranslations.en, pageTranslations.en) }
    : sharedTranslations;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[lang]?.[el.getAttribute('data-i18n')];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = t[lang]?.[el.getAttribute('data-i18n-ph')];
    if (v !== undefined) el.placeholder = v;
  });

  localStorage.setItem('pestone-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.textContent = lang === 'id' ? 'EN' : 'ID');
}

function toggleLang() {
  applyLang(localStorage.getItem('pestone-lang') === 'en' ? 'id' : 'en');
}

(function() {
  const lang = localStorage.getItem('pestone-lang') || 'id';
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyLang(lang));
  } else {
    applyLang(lang);
  }
})();
