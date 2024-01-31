const inquirer = require('inquirer');

async function getUserInput() {
    const UserInput = await inquirer.prompt([
        { name: 'text', message: 'Enter text (up to three characters):', validate: input => input.length <= 3 },
        { name: 'textColor', message: 'Enter text color (keyword or hex):' },
        { name: 'shape', type: 'list', message: 'Choose a shape:', choices: ['Circle', 'Triangle', 'Square'] },
        { name: 'shapeColor', message: 'Enter shape color (keyword or hex):' },
    ]);
    return UserInput;
}
module.exports = {getUserInput};