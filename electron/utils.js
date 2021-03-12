const path = require("path");
const url = require("url");


let mainUrl = (isPopup = false, html = 'index') => url.format({
	pathname:  `${__dirname}/../html/${html}.html`,
	protocol: "file:",
	slashes: true,
	hash:isPopup ? '/popout' : null
});

module.exports = {
	mainUrl,
}