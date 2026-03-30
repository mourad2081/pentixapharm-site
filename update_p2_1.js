
const fs = require('fs');
const path = require('path');
const B = __dirname;
function w(f, c) { fs.mkdirSync(path.dirname(path.join(B,f)),{recursive:true}); fs.writeFileSync(path.join(B,f),c,'utf8'); console.log('✓',f); }
function r(f) { return fs.readFileSync(path.join(B,f),'utf8'); }

// ── 1. DEPENDENCIES ────────────────────────────────────────────────────────
const pkgPath = path.join(B, 'package.json');
let pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
if (!pkg.dependencies['@splinetool/react-spline']) {
  pkg.dependencies['@splinetool/react-spline'] = '^4.0.0';
  pkg.dependencies['@splinetool/runtime'] = '^1.0.0';
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf8');
}

// ── 2. COLORS & TAILWIND ───────────────────────────────────────────────────
// Adjust to match Pentixapharm / professional biotech.
// Let's use #003057 (Deep Corporate Blue) and #00B1AB (Teal/Mint Accent), with #FFB81C (Gold)
let tw = r('tailwind.config.ts');
tw = tw.replace(/navy:"#071429",navy2:"#0B1D3A",navy3:"#1E3250",/g, 'navy:"#041A2F",navy2:"#0A2A4A",navy3:"#133F6E",');
tw = tw.replace(/emerald:"#00B894",emeraldDark:"#00997A"/g, 'emerald:"#00B1AB",emeraldDark:"#008A85"');
tw = tw.replace(/cyan:"#00CEC9",gold:"#FDCB6E"/g, 'cyan:"#00D2FF",gold:"#FFB81C"');
fs.writeFileSync(path.join(B,'tailwind.config.ts'), tw, 'utf8');

let css = r('src/app/globals.css');
css = css.replace(/body { @apply bg-navy text-white font-sans; }/g, 'body { @apply bg-white text-slate-800 font-sans; }\n.dark body { @apply bg-navy text-white; }');
// The user wants Pentixapharm logo and colors. The site is currently dark theme only. We will stick to the dark theme but with the #00B1AB teal and #041A2F deep blue.
fs.writeFileSync(path.join(B,'src/app/globals.css'), css, 'utf8');

// ── 3. MESSAGES (EN/DE) ────────────────────────────────────────────────────
let mEn = JSON.parse(r('messages/en.json'));
let mDe = JSON.parse(r('messages/de.json'));
mEn.nav.careers = "Careers";
mDe.nav.careers = "Karriere";
mEn.nav.partnerships = "Partnerships";
mDe.nav.partnerships = "Partnerschaften";
mEn.careers = {
  title: "Build the Future of Theranostics",
  desc: "Join Pentixapharm in developing ground-breaking CXCR4-targeted radiopharmaceuticals. We are seeking passionate trailblazers to join our team in Berlin and Würzburg.",
  btn: "View Open Positions"
};
mDe.careers = {
  title: "Gestalten Sie die Zukunft der Theranostik",
  desc: "Werden Sie Teil von Pentixapharm bei der Entwicklung bahnbrechender CXCR4-gerichteter Radiopharmazeutika. Wir suchen leidenschaftliche Pioniere für unsere Teams in Berlin und Würzburg.",
  btn: "Offene Stellen ansehen"
};
fs.writeFileSync(path.join(B,'messages/en.json'), JSON.stringify(mEn, null, 2), 'utf8');
fs.writeFileSync(path.join(B,'messages/de.json'), JSON.stringify(mDe, null, 2), 'utf8');

console.log("Updated deps, tailwind colors, and translations.");
