const dataAccessLayer = require("./config/dal.js");
const inquirer = require(`inquirer`);

const divider = `\n---------------------------------------------------\n`

// dataAccessLayer.select([`first_name`, `last_name`, `role_id`], [`employee`]);
//dataAccessLayer.create([`first_name`, `last_name`, `role_id`], ['Jon', 'Smith', 1], [`employee`]);

// databasePrompts.question1().then(console.log(data));

const prompts = {
    firstaction: () => {
        return new Promise((resolve, reject) => {

            inquirer
                .prompt([
                    {
                        type: `list`,
                        name: `firstaction`,
                        message: `${divider} What would you like to do? ${divider}`,
                        choices: [
                            `View Departments`,
                            `View Employees`,
                            `View Roles`,
                            `Add Departments`,
                            `Add Employees`,
                            `Add Roles`,
                            `Update Employee Roles`,
                            `Exit Application`
                        ]
                    }
                ]).then(({firstaction}) => {
                    mySwitch(firstaction);
                })
                .catch(() => {
                    console.log(`\nSomething went wrong... please try again.\n`);
                    process.exit(1);
                })
        });

    },

    newDepartment: () => {
        return new Promise((resolve, reject) => {

            inquirer
                .prompt([
                    {
                        type: `input`,
                        message: `${divider} What is the Department Title? ${divider}`,
                        name: `departmentname`
                    }
                ]).then(({departmentname}) => {
                    return resolve(dataAccessLayer.create([`name`], [departmentname], [`department`], function() {
                        prompts.firstaction();
                    }))
                }).catch(() => {
                    console.log(`\nSomething went wrong... please try again.\n`);
                    process.exit(1);
                })
        });
    },

    newEmployee: () => {

        const roles = [];
        const rolesId = [];

        dataAccessLayer.select([`*`], [`role`], function(result) {
            result.forEach(element => roles.push(element.title));
            result.forEach(element => rolesId.push(element.role_id));
        });

        return new Promise((resolve, reject) => {

            inquirer
                .prompt([
                    {
                        type: `input`,
                        message: `${divider} What is the Employee's first name? ${divider}`,
                        name: `firstname`
                    },
                    {
                        type: `input`,
                        message: `${divider} What is the Employee's last name? ${divider}`,
                        name: `lastname`
                    },
                    {
                        type: `list`,
                        name: `role`,
                        message: `${divider} What role does this employee have? ${divider}`,
                        choices: roles
                    }
                ]).then(({firstname, lastname, role}) => {

                    roleIndex = roles.indexOf(role);
                    return resolve(dataAccessLayer.create([`first_name`, `last_name`, `role_id`], [firstname, lastname, rolesId[roleIndex]], [`employee`], function() {
                        prompts.firstaction();
                    }))

                }).catch(() => {
                    console.log(`\nSomething went wrong... please try again.\n`);
                    process.exit(1);
                })
        });
    }
}



const mySwitch = (returnedInput) => {
    return new Promise((resolve, reject) => {
        switch (returnedInput) {
            case `View Departments`:

                dataAccessLayer.select([`*`], [`department`], function(result) {
                    console.table(result);
                    prompts.firstaction();
                });
                
                resolve();
                break;

            case `View Employees`:

                dataAccessLayer.select([`*`], [`employee`], function(result) {
                    console.table(result);
                    prompts.firstaction();
                });
                
                resolve();
                break;

            case `View Roles`:
                
                dataAccessLayer.select([`*`], [`role`], function(result) {
                    console.table(result);
                    prompts.firstaction();
                });
                resolve();
                break;

            case `Add Departments`:

                prompts.newDepartment();
                break;

            case `Add Employees`:

                prompts.newEmployee();
                break;

            case `Add Roles`:

                break;

            case  `Update Employee Roles`:

                break;
                
            case `Exit Application`:
                console.log(`Goodbye!`)
                return process.exit();        
          }
    })
}

prompts.firstaction();

// dataAccessLayer.select([`*`], [`department`], function(result) {
//     console.table(result)
// });

// dataAccessLayer.create([`first_name`, `last_name`, `role_id`], ['TEST', 'Smith', 1], [`employee`]);
// dataAccessLayer.create([`name`], [`Test Department`], [`department`]);