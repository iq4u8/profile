const https = require('https');
const fs = require('fs');

const generateQR = (filename, url) => {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      data: url,
      config: {
        body: "circle-zebra-vertical",
        eye: "frame2",
        eyeBall: "ball2",
        bodyColor: "#e8f4f9",
        bgColor: "#000000",
        eye1Color: "#e8f4f9",
        eye2Color: "#e8f4f9",
        eye3Color: "#e8f4f9",
        eyeBall1Color: "#e8f4f9",
        eyeBall2Color: "#e8f4f9",
        eyeBall3Color: "#e8f4f9"
      },
      size: 300,
      download: false,
      file: "png",
      transparentBkg: true
    });

    const options = {
      hostname: 'api.qrcode-monkey.com',
      path: '/qr/custom',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
        'User-Agent': 'Mozilla/5.0'
      }
    };

    const req = https.request(options, (res) => {
      if(res.statusCode !== 200) {
          reject(new Error("Failed " + res.statusCode));
          return;
      }
      const file = fs.createWriteStream(filename);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    });

    req.on('error', (e) => reject(e));
    req.write(payload);
    req.end();
  });
};

async function main() {
  const projects = [
    { n: "main", url: "https://iq4u8.shop" },
    { n: "project/01", url: "https://github.com/iq4u8" },
    { n: "project/02", url: "https://github.com/iq4u8" },
    { n: "project/03", url: "https://github.com/iq4u8" },
    { n: "project/04", url: "https://github.com/iq4u8" },
    { n: "project/05", url: "https://github.com/iq4u8" }
  ];

  for (let p of projects) {
    console.log(`Generating QR for ${p.n}...`);
    try {
      const path = p.n === "main" ? "assets/qr.png" : `assets/${p.n}.png`;
      await generateQR(path, p.url);
      console.log(`Saved ${path}`);
    } catch (e) {
      console.error(`Failed ${p.n}:`, e);
    }
  }
}

main();
