const rimraf = require("rimraf");
const execSync = require("child_process").execSync;
const fs = require('fs-extra');
const getVer = require('./lib/getVer');

let msg;
execSync(`git pull`);
rimraf.sync(`static/`);
fs.copySync(`../web/static`, 'static/');

msg = execSync(`git status`).toString();
if(msg.includes('nothing to commit') || msg.includes('无文件要提交')){
  return console.log(msg);
}

const ver = getVer();
msg = execSync(`git add . && git commit -m 'auto commit' && git push && git tag v${ver} && git push origin v${ver}`).toString();
console.log(msg);
