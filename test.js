const https = require('https');
const fs = require('fs');

const payload = JSON.stringify({
  data: "https://iq4u8.shop",
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
    'Content-Length': Buffer.byteLength(payload)
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Remove the background rect which is typically the first <path fill="#FFFFFF"> or <rect fill="#FFFFFF">
    data = data.replace(/<rect[^>]*fill="#FFFFFF"[^>]*>/i, '');
    data = data.replace(/<path[^>]*fill="#FFFFFF"[^>]*d="M0 0h1000v1000H0z"\/>/i, '');
    fs.writeFileSync("assets/test_transparent.svg", data);
    console.log("Saved SVG");
  });
});
req.write(payload);
req.end();
