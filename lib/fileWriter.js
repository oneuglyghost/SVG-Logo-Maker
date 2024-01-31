const fs = require("fs");

function writeSVGToFile(content, text, textColor) {
    const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <g>
                ${content}
                <text x="150" y="100" fill="${textColor}" text-anchor="middle" alignment-baseline="middle" font-size="20">${text}</text>
            </g>
        </svg>
    `;

    fs.writeFileSync("logo.svg", svgContent);
    console.log("Generated logo.svg");
}

module.exports = { writeSVGToFile };