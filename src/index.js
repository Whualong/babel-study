const { transformFileSync } = require('@babel/core')
const path = require('path');
const insertConsolePlugin = require('./plugins/insertConsole.js')
const { code } = transformFileSync( path.join(__dirname,'./sourceCode.js'),{
    plugins : [ insertConsolePlugin ],
    parserOpts : {
        plugins : [ 'jsx' ],
        sourceType : 'unambiguous'
        
    }
} )
console.log('generate code \n ',code )