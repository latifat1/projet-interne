const fs = require('fs');
const path = require('path');

const leafletAssets = [
  'marker-icon.png',
  'marker-icon-2x.png',
  'marker-shadow.png'
];

const sourceDir = path.join(__dirname, '../node_modules/leaflet/dist/images');
const targetDir = path.join(__dirname, '../public');

// Créer le dossier public s'il n'existe pas
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

// Copier chaque fichier
leafletAssets.forEach(asset => {
  const sourcePath = path.join(sourceDir, asset);
  const targetPath = path.join(targetDir, asset);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${asset} to public folder`);
  } else {
    console.error(`Could not find ${asset} in Leaflet assets`);
  }
}); 