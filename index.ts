#!  /usr/bin/env node 

import inquirer  from "inquirer";

const answer =await inquirer.prompt([
    
        { message: "enter first number",type : "number", name: "firstnumber" },
        {message:"enter second number", type: "number", name: "secondnumber"},
        {
        message:"select one of the operators to perform operators",
         type:"list",
         name:"operator",
         choices:["Addition", "subtraction","multiplication", "division", "power"],
        },
]);
// console.log(answer);
// conditional statements if-Else
if(answer.operator === "Addition"){
    console.log(answer.firstnumber + answer.secondnumber);
}
else if( answer.operator ==="subtraction"){
    console.log( answer.firstnumber - answer.secondnumber);
}
else if(answer.operator ==="multiplication" ){
    console.log(answer.firstnumber * answer.secondnumber);
}
else if(answer.operator === "division"){
    console.log(answer.firstnumber / answer.secondnumber);
}
else if(answer.operator === "power"){
    console.log(answer.firstnumber ** answer.secondnumber);
}
else {
    console.log("  please select  valid operator");
};
