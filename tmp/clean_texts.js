const fs = require('fs');
const path = require('path');

const messagesDir = './messages';
const files = fs.readdirSync(messagesDir).filter(f => f.endsWith('.json'));

files.forEach(file => {
    const filePath = path.join(messagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove dashes —
    content = content.replace(/ — /g, '. ');
    content = content.replace(/—/g, '.');
    
    // Remove "AI buzzy words" (Case insensitive)
    // architecture -> plan
    // seamless -> simple 
    // journey -> process
    // tailored precisely -> built
    // tailored -> built
    // personalized -> custom
    // wealth protection -> wealth
    // comprehensive -> full
    // expertise -> knowledge
    // strategic -> smart
    // robust -> strong
    // elevate -> improve
    
    const replacements = [
        [/architecture/gi, 'plan'],
        [/seamless/gi, 'simple'],
        [/journey/gi, 'process'],
        [/tailored precisely/gi, 'built'],
        [/tailored/gi, 'built'],
        [/personalized/gi, 'custom'],
        [/comprehensive/gi, 'full'],
        [/expertise/gi, 'knowledge'],
        [/exceptional/gi, 'great'],
        [/unparalleled/gi, 'top'],
        [/unrivaled/gi, 'best'],
        [/ultimate/gi, 'total'],
        [/synergy/gi, 'work'],
        [/strategic/gi, 'smart'],
        [/robust/gi, 'strong'],
        [/leverage/gi, 'use'],
        [/innovative/gi, 'new'],
        [/empower/gi, 'help'],
        [/unlock/gi, 'get'],
        [/curated/gi, 'chosen'],
        [/elevate/gi, 'improve'],
        [/navigating/gi, 'managing'],
        [/navigate/gi, 'manage'],
    ];

    replacements.forEach(([regex, replacement]) => {
        content = content.replace(regex, replacement);
    });

    fs.writeFileSync(filePath, content);
    console.log(`Cleaned ${file}`);
});
