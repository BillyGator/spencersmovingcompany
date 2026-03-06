import fs from 'fs';
import path from 'path';

const basePath = `c:/Users/Billy/Desktop/Spencers Moving/Website Files/Kimi_Agent_Spencer's Moving Site Design`;
const webpDir = path.join(basePath, 'WebP Images');
const destDir = path.join(basePath, 'app/public/images');
const pagesDir = path.join(basePath, 'app/src/pages');

// Ensure directories exist
if (!fs.existsSync(webpDir)) {
    console.error("WebP dir not found");
    process.exit(1);
}

const webpFiles = fs.readdirSync(webpDir).filter(f => f.endsWith('.webp'));
const replacedFiles = new Map();

for (const webpFile of webpFiles) {
    // e.g. "Pic 3.webp" -> "Pic 3.jpg" or "Pic 3.png"
    // e.g. "fishing_team.jpg.webp" -> "fishing_team.jpg" or "fishing_team.jpg.png"
    const baseName = webpFile.replace(/\.webp$/, '');

    // Move webp file
    const srcWebPath = path.join(webpDir, webpFile);
    const destWebPath = path.join(destDir, webpFile);

    if (!fs.existsSync(destWebPath)) {
        fs.copyFileSync(srcWebPath, destWebPath);
    }

    // Find original extension
    let originalExt = '';
    let originalFileName = '';

    for (const ext of ['.jpg', '.png', '.jpeg']) {
        if (fs.existsSync(path.join(destDir, baseName + ext))) {
            originalExt = ext;
            originalFileName = baseName + ext;
            break;
        }
    }

    // Also check if baseName itself contains .jpg or .png
    if (baseName.endsWith('.jpg') || baseName.endsWith('.png')) {
        if (fs.existsSync(path.join(destDir, baseName))) {
            originalExt = '';
            originalFileName = baseName;
        }
        if (fs.existsSync(path.join(destDir, baseName + '.png'))) {
            originalExt = '.png';
            originalFileName = baseName + '.png';
        }
    }

    if (originalFileName) {
        const origPath = path.join(destDir, originalFileName);
        if (fs.existsSync(origPath)) {
            fs.unlinkSync(origPath);
            console.log(`Deleted original: ${originalFileName}`);
        }

        // We will replace occurrences in TSX files
        replacedFiles.set(originalFileName, webpFile);
    } else {
        replacedFiles.set(baseName + '.png', webpFile);
        replacedFiles.set(baseName + '.jpg', webpFile);
    }
}

// Update TSX
const tsxFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));
for (const file of tsxFiles) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    for (const [orig, webp] of replacedFiles.entries()) {
        const origEscaped = orig.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(origEscaped, 'g');
        if (regex.test(content)) {
            content = content.replace(regex, webp);
            changed = true;
            console.log(`Updated ${orig} to ${webp} in ${file}`);
        }
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Saved changes to ${file}`);
    }
}
