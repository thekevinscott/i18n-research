var translations = {
    en: 'Hello',
    fr: 'Bonjour'
};

var lang = document.getElementsByTagName('html')[0].getAttribute('lang');
document.getElementById('string').innerHTML = translations[lang];
