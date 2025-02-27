const { exec } = require('child_process');
const port = process.env.PORT || 8080;
exec(`chmod +x ./xray && ./xray -config config.json -port ${port}`, (err, stdout, stderr) => {
  if (err) console.error(err);
  console.log(stdout);
  console.error(stderr);
});
