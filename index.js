const rimraf = require("rimraf");
const execSync = require("child_process").execSync;
const fs = require('fs-extra');

let msg;
execSync(`git pull`);
rimraf.sync(`static/`);
fs.copySync(`../web/static`, 'static/');

msg = execSync(`git add . && git commit -m 'auto commit'`);
console.log(msg.toString());
