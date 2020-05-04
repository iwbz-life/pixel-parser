const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const lineRx = /(.*)\s+\/interwebs.gif\?life=(.*?)\s+(.+?)\s+(.+?)\s+(.+?)\s+"https:\/\/www.interwebs.life(.*?)"\s+(.*)/;

rl.on('line', (line) => {
  if (lineRx.test(line)) {
    console.log(line.replace(lineRx, (match, p1, p2, p3, p4, p5, p6, p7) => {
      return [ p1, p6, p3, p4, p5, `"${decodeURIComponent(p2)}"`, p7].join(' ');
    }));
  }
})