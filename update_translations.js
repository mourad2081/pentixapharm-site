const fs = require('fs');
const path = require('path');

const locales = ['ar', 'de', 'en', 'fr'];
const newKeys = {
  ar: { contact: "اتصل بنا", resources: "الموارد", seminars: "الندوات" },
  de: { contact: "Kontakt", resources: "Ressourcen", seminars: "Seminare" },
  en: { contact: "Contact", resources: "Resources", seminars: "Seminars" },
  fr: { contact: "Contact", resources: "Ressources", seminars: "Séminaires" },
};

locales.forEach(loc => {
  const p = path.join(__dirname, 'messages', `${loc}.json`);
  if (fs.existsSync(p)) {
    const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
    if (!data.Navbar) data.Navbar = {};
    
    data.Navbar.contact = newKeys[loc].contact;
    data.Navbar.resources = newKeys[loc].resources;
    data.Navbar.seminars = newKeys[loc].seminars;

    fs.writeFileSync(p, JSON.stringify(data, null, 2));
    console.log(`Updated ${loc}.json`);
  }
});
