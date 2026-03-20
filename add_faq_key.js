const fs = require('fs');
const path = require('path');

const locales = ['en', 'de', 'fr', 'ar'];
const newKeys = {
  en: { faq: "FAQ" },
  de: { faq: "FAQ" },
  fr: { faq: "FAQ" },
  ar: { faq: "الأسئلة الشائعة" },
};

locales.forEach(loc => {
  const filePath = path.join(__dirname, 'messages', `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  data.Navbar = { ...data.Navbar, ...newKeys[loc] };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});
console.log("FAQ key added to Navbar translations!");
