const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

const filesToDelete = [
  'page.tsx',
  'components.tsx'
];

const dirsToDelete = [
  'platform',
  'projects',
  'solutions',
  'about',
  'contact',
  'industries',
  'ai-portal'
];

filesToDelete.forEach(file => {
  const filePath = path.join(appDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`Deleting ${filePath}`);
    fs.unlinkSync(filePath);
  }
});

dirsToDelete.forEach(dir => {
  const dirPath = path.join(appDir, dir);
  if (fs.existsSync(dirPath)) {
    console.log(`Deleting ${dirPath}`);
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
});

console.log('Cleanup complete!');
