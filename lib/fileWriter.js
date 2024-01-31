const fs = require("fs");

function writeSVGToFile(content) {
    fs.writeFileSync("logo.svg",content);
    console.log("Generated logo.svg");

}

module.exports = {writeSVGToFile};