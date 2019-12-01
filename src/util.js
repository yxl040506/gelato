const path = require('path')
module.exports = function getAppRootPath () {
    let rootPath = path.join(__dirname, '../')
    console.log(rootPath)
    return rootPath
}