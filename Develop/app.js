const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const askFor = require("./lib/myCLIPrompts");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const employeesList = [];

async function init() {

    console.log("\x1b[34m%s\x1b[0m", "\nWelcome to Team Manager!\n\n");

    // Asking user to input authorization code
    // PASSWORD = UCBC2020
    const codeInput = await askFor.authCode();
    

    if(codeInput.authCode != "UCBC2020") {
        console.log("\x1b[31m%s\x1b[0m", "\nACCESS DENIED.");
        console.log("Goodbye!");
    }
    else {
        console.log("\x1b[32m%s\x1b[0m", "\nAccess Granted!\n");
        
        let addEmployee = true;
        let newManager, newEngineer, newIntern;

        console.log("\x1b[34m%s\x1b[0m", "\nAnswer the following prompts about your work team.\nOnce completed, a new webpage will be generated with your team information!\n");


        while(addEmployee === true) {
            let employeeType = await askFor.employeeType();

            if(employeeType.employeeType === "Manager") {
                let managerInfo = await askFor.managerInfo();
                newManager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
                employeesList.push(newManager);
            }
            else if(employeeType.employeeType === "Engineer") {
                let engineerInfo = await askFor.engineerInfo();
                newEngineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
                employeesList.push(newEngineer);
            }
            else {
                let internInfo = await askFor.internInfo();
                newIntern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
                employeesList.push(newIntern);
            }

        let askTo = await askFor.addEmployee();
        addEmployee = askTo.addEmployee;
        }
        
        const htmlRendered = await render(employeesList);
        fs.writeFileSync(outputPath, htmlRendered);
        console.log("Success!\nemployees:");
    }
    

}

init();