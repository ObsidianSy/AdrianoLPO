const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Dimensões recomendadas para Open Graph (WhatsApp, Facebook, etc)
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

// SVG com o logo AR em fundo escuro elegante
const ogSvg = `
<svg width="${OG_WIDTH}" height="${OG_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c0a09"/>
      <stop offset="100%" style="stop-color:#1c1917"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#d4a574"/>
      <stop offset="100%" style="stop-color:#9E8038"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bgGrad)"/>
  
  <!-- Decorative lines -->
  <line x1="100" y1="150" x2="100" y2="480" stroke="#9E8038" stroke-width="2" opacity="0.6"/>
  
  <!-- Logo AR -->
  <text x="600" y="280" font-family="Georgia, serif" font-size="180" font-weight="bold" fill="url(#goldGrad)" text-anchor="middle">AR</text>
  
  <!-- Name -->
  <text x="600" y="380" font-family="Arial, sans-serif" font-size="48" fill="#ffffff" text-anchor="middle" letter-spacing="2">Adriano Rodrigo</text>
  
  <!-- Subtitle -->
  <text x="600" y="440" font-family="Arial, sans-serif" font-size="24" fill="#d4a574" text-anchor="middle" letter-spacing="8" text-transform="uppercase">MENTOR DE POSICIONAMENTO</text>
  
  <!-- Tagline -->
  <text x="600" y="520" font-family="Arial, sans-serif" font-size="28" fill="#a8a29e" text-anchor="middle" font-style="italic">Você não precisa de mais velocidade. Precisa de direção.</text>
  
  <!-- Rota 360 badge -->
  <rect x="480" y="550" width="240" height="40" rx="20" fill="none" stroke="#9E8038" stroke-width="2"/>
  <text x="600" y="578" font-family="Arial, sans-serif" font-size="18" fill="#d4a574" text-anchor="middle" letter-spacing="4">ROTA 360°</text>
</svg>
`;

// Gerar imagem PNG para Open Graph
async function generateOgImage() {
  const outputPath = path.join(__dirname, '../public/og-image.png');
  
  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile(outputPath);
  
  console.log(`✅ Imagem Open Graph gerada: ${outputPath}`);
  console.log(`   Dimensões: ${OG_WIDTH}x${OG_HEIGHT}px`);
}

// Gerar favicon PNG (512x512 para PWA)
async function generateFaviconPng() {
  const faviconSvg = `
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0c0a09"/>
  <text x="256" y="340" font-family="Georgia, serif" font-size="280" font-weight="bold" fill="#9E8038" text-anchor="middle">AR</text>
</svg>
`;
  
  const outputPath = path.join(__dirname, '../public/icon-512.png');
  
  await sharp(Buffer.from(faviconSvg))
    .png()
    .toFile(outputPath);
  
  console.log(`✅ Ícone PWA gerado: ${outputPath}`);
}

// Executar
async function main() {
  try {
    await generateOgImage();
    await generateFaviconPng();
    console.log('\n🎉 Todas as imagens foram geradas com sucesso!');
  } catch (error) {
    console.error('Erro ao gerar imagens:', error);
    process.exit(1);
  }
}

main();
