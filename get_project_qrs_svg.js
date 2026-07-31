const https = require('https');
const fs = require('fs');

const generateQRSVG = (filename, url) => {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      data: url,
      config: {
        body: "circle-zebra-vertical",
        eye: "frame2",
        eyeBall: "ball2",
        bodyColor: "#e8f4f9",
        eye1Color: "#e8f4f9",
        eye2Color: "#e8f4f9",
        eye3Color: "#e8f4f9",
        eyeBall1Color: "#e8f4f9",
        eyeBall2Color: "#e8f4f9",
        eyeBall3Color: "#e8f4f9",
        bgColor: "#FFFFFF"
      },
      size: 300,
      download: false,
      file: "svg"
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
      let data = '';
      if(res.statusCode !== 200) {
          reject(new Error("Failed " + res.statusCode));
          return;
      }
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Remove the background rect
        data = data.replace(/<rect[^>]*fill="rgb\(255,255,255\)"[^>]*\/>/i, '');
        data = data.replace(/<rect[^>]*fill="#FFFFFF"[^>]*\/>/i, '');
        data = data.replace(/<path[^>]*fill="rgb\(255,255,255\)"[^>]*d="M0 0h1000v1000H0z"\/>/i, '');
        fs.writeFileSync(filename, data);
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
    console.log(`Generating SVG QR for ${p.n}...`);
    try {
      const path = p.n === "main" ? "assets/qr.svg" : `assets/${p.n}.svg`;
      await generateQRSVG(path, p.url);
      console.log(`Saved ${path}`);
    } catch (e) {
      console.error(`Failed ${p.n}:`, e);
    }
  }
}

main();
