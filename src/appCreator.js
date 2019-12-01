const program = require('commander')
const inquirer = require('inquirer')
const path = require('path')
const getAppRootPath = require('./util')
const fs = require('fs-extra');
class AppCreator {
    create () {
        inquirer
        .prompt([
            {
            type: 'input',
            name: 'applicationName',
            message: 'Please name your application'
            }
        ])
        .then(answers => {
            console.log('answeris', answers)
            // Use user feedback for... whatever!!
            this.generateFileFromTemplate(answers.applicationName)
        });
    }
    generateFileFromTemplate (appName) {
        let rootPath = getAppRootPath()
        console.log(path.join(rootPath, 'template', 'copyTemplate.js'))
        let copyTemplateFunc = require(path.join(rootPath, 'template', 'app', 'copyTemplate.js'))
        // console.log('process.', process.cwd())
            // fs.mkdirpSync(answers.applicationName)
            // let appName = 
        copyTemplateFunc(appName, process.cwd())
    }
}
module.exports = AppCreator