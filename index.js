const rimraf = require("rimraf");
const execSync = require("child_process").execSync;
const fs = require('fs-extra');

let msg;
execSync(`git pull`);
rimraf.sync(`static/`);
fs.copySync(`../web/static`, 'static/');

msg = execSync(`git status`).toString();
if(msg.includes('nothing to commit') || msg.includes('无文件要提交')){
  return console.log(msg);
}

msg = execSync(`git add . && git commit -m 'auto commit' && git push`).toString();
console.log(msg.toString);
