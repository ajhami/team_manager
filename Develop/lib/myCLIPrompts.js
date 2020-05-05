const inquirer = require("inquirer");

module.exports = {
    authCode: function() {
        return inquirer.prompt({
            type: "password",
            message: "Please provide the management authorization code:",
            name: "authCode"
        })
    },
    employeeType: function() {
        return inquirer.prompt({
            type: "list",
            name: "employeeType",
            message: "What type of employee are you adding to the team?",
            choices: ["Manager", "Engineer", "Intern"]
        })
    },
    managerInfo: function() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Manager's name:"
            },
            {
                type: "input",
                name: "id",
                message: "ID number:"
            },
            {
                type: "input",
                name: "email",
                message: "Email address:"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Office number:"
            }
        ])
    },
    engineerInfo: function() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Engineer's name:"
            },
            {
                type: "input",
                name: "id",
                message: "ID number:"
            },
            {
                type: "input",
                name: "email",
                message: "Email address:"
            },
            {
                type: "input",
                name: "github",
                message: "GitHub account"
            }
        ])
    },
    internInfo: function() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Intern's name:"
            },
            {
                type: "input",
                name: "id",
                message: "ID number:"
            },
            {
                type: "input",
                name: "email",
                message: "Email address:"
            },
            {
                type: "input",
                name: "school",
                message: "School:"
            }
        ])
    },
    addEmployee: function() {
        return inquirer.prompt({
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add another employee to your team?",
        })
    }
     
}
