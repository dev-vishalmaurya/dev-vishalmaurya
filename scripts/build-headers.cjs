const fs = require('fs');
const path = require('path');

const sections = [
  { id: 'about', title: 'EXECUTIVE PROFILE & PHILOSOPHY', desc: 'Architecture, Clean Code & Enterprise System Design' },
  { id: 'stack', title: 'TECHNICAL & ARCHITECTURAL ARSENAL', desc: 'Core Technologies, Frameworks & Infrastructure' },
  { id: 'bounties', title: 'OPEN SOURCE & FUNDED BOUNTY IMPACT', desc: 'Active High-Complexity Contributions in Production Codebases' },
  { id: 'projects', title: 'FEATURED ENTERPRISE SYSTEMS', desc: 'Case Studies: Architecture, Data Pipelines & UI/UX' },
  { id: 'metrics', title: 'CONTRIBUTION TELEMETRY & ACTIVITY', desc: 'Consistency, Code Frequency & Open-Source Momentum' },
  { id: 'contact', title: "LET'S CONNECT & COLLABORATE", desc: 'Open for Senior Engineering, Architecture Consulting & Leadership' }
];

const assetsDir = path.resolve(__dirname, '../assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

for (const s of sections) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 54" width="100%" height="100%">
  <defs>
    <linearGradient id="lineGrad_${s.id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#818CF8" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#1E293B" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="barGrad_${s.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#818CF8" />
    </linearGradient>
  </defs>
  <style>
    .sec-title { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-weight: 800; font-size: 14px; fill: #F8FAFC; letter-spacing: 1.2px; }
    .sec-desc { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-weight: 500; font-size: 11px; fill: #64748B; letter-spacing: 0.2px; }
  </style>
  <rect x="0" y="10" width="4" height="32" rx="2" fill="url(#barGrad_${s.id})" />
  <text x="16" y="26" class="sec-title">${s.title}</text>
  <text x="16" y="42" class="sec-desc">${s.desc}</text>
  <line x1="16" y1="52" x2="850" y2="52" stroke="url(#lineGrad_${s.id})" stroke-width="1" />
</svg>`;

  fs.writeFileSync(path.join(assetsDir, `header-${s.id}.svg`), svg, 'utf8');
  console.log(`Created header-${s.id}.svg`);
}
