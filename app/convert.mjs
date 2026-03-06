import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = './public/images';
const files = fs.readdirSync(dir);

async function convertImages() {
    for (const file of files) {
        if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png')) {
            const ext = path.extname(file);
            const basename = path.basename(file, ext);

            // Skip if webp already exists
            if (fs.existsSync(path.join(dir, `${basename}.webp`))) {
                console.log(`Skipping ${file}, webp already exists.`);
                continue;
            }

            try {
                await sharp(path.join(dir, file))
                    .webp({ quality: 80 })
                    .toFile(path.join(dir, `${basename}.webp`));
                console.log(`Converted ${file} to ${basename}.webp`);
            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }
    }
}

convertImages();
