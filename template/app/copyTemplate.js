const memFs = require("mem-fs");
const editor = require("mem-fs-editor");
const path = require('path');
const fs = require('fs-extra');
const getAppRootPath = require('../../src/util')
module.exports = function (appName, appBasePath) {
    let sourceRootPath = path.join(appName, 'src')
    fs.mkdirpSync(appName)
    fs.mkdirpSync(sourceRootPath)
    var store = memFs.create();
    var editorFs = editor.create(store);
    let from = path.join(getAppRootPath(), 'template', 'app', 'index.js')
    let to = path.join(appBasePath, appName, 'src', 'index.js')
    console.log('from', from)
    console.log('to', to)
    editorFs.copyTpl(from, to, {
        appName
    })
    editorFs.commit(()=>{})
}