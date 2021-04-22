require('bytenode'); 
module.exports = require('./api_blacklist.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')