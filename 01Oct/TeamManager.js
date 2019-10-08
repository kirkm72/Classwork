let programmerInfo = require("inquirer");
programmerInfo
    .prompt([
        {
            type: "input",
            message: "Enter Programmer's name: ",
            name: "username"
          },
          {
            type: "input",
            message: "Programmer's Job Title: ",
            name: "jobTitle",
          },
          {
            type: "input",
            message: "Programmer's age: ",
            name: "age",
          },
          {
            type: "input",
            message: "Programmer's favorite language: ",
            name: "favorite",
          },
    ])
    
