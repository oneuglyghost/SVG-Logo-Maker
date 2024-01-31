const { getUserInput } = require('./lib/inputHandler');
const { writeSVGToFile, startServer } = require('./lib/fileWriter');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function generateLogo() {
    const userInput = await getUserInput();

    const shape = userInput.shape === 'Circle' ? new Circle() :
                    userInput.shape === 'Triangle' ? new Triangle() :
                    new Square();
    shape.setColor(userInput.shapeColor);

    const svgContent = shape.render();
    const text = userInput.text || ""; // Get the user input text
    const textColor = userInput.textColor || "black";
    writeSVGToFile(svgContent,text, textColor);
}

generateLogo();