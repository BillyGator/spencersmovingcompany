const Jimp = require('jimp');

const files = [
    'value_customer_first_medal.png',
    'value_trust_integrity.png',
    'value_excellence.png',
    'value_community.png'
];

async function removeWhiteBackgrounds() {
    for (const file of files) {
        try {
            console.log(`Processing ${file}...`);
            const image = await Jimp.read(file);

            const targetColor = { r: 255, g: 255, b: 255 }; // White

            image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
                const r = this.bitmap.data[idx + 0];
                const g = this.bitmap.data[idx + 1];
                const b = this.bitmap.data[idx + 2];

                // Tolerance to capture off-white edge pixels from compression
                if (r > 230 && g > 230 && b > 230) {
                    this.bitmap.data[idx + 3] = 0; // Set Alpha to 0 (Transparent)
                }
            });

            await image.writeAsync(file);
            console.log(`Processed and overrode ${file}`);
        } catch (error) {
            console.error(`Error processing ${file}: ${error}`);
        }
    }
}

removeWhiteBackgrounds();
