const fs = require('fs');

const getVer = () => {
  const pjson = require('../package.json');
  const curVer = pjson.version;
  const curVerNum = curVer.split('.').reverse().reduce((l, c, i) => l + c * 10 ** i, 0);
  const num = curVerNum + 1;
  pjson.version = `${parseInt((num % 1000) / 100)}.${parseInt((num % 100) / 10)}.${parseInt(num % 10)}`;
  fs.writeFileSync('package.json', JSON.stringify(pjson, null, 2));
  return pjson.version;
};

module.exports = getVer;