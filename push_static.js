const rimraf = require("rimraf");
const execSync = require("child_process").execSync;
const fs = require('fs-extra');

execSync($`git pull`);
rimraf.sync(`static/`);
fs.copySync(`../web/static`, 'static/')

const code = execSync(`git status`);
if (!code.toString().includes(`Changes not staged`)) {
  return console.log(`文件没有变化，无需发布`);
}
// const code2 = execSync(`npm run pub`);
// console.log(code2.toString());
