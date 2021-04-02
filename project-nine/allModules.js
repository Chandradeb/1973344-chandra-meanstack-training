const fs = require('fs');
let rdLine = require("readline-sync");
let fname;
let lname;
let email;
let gender;
let date;
let time;

logData = function(){
    if(fs.existsSync('log.json')){
        let recDate2 = new Date();
        let logObj2 = fs.readFileSync('log.json');
        let logStr2 = logObj2.toString();
        logArray2 = JSON.parse(logStr2);
        debugger;
        date = recDate2.toLocaleDateString();
        time = recDate2.toLocaleTimeString();
        let logObj3 = {"fname":fname, "lname": lname, "email": email, "gender": gender,
            "date": date, "time": time};
        debugger;
        logArray2.push(logObj3);
        let logStr3 = JSON.stringify(logArray2);
        fs.writeFileSync("log.json", logStr3);
        console.log("files created");
    }else{
        let recDate1 = new Date();
        date = recDate1.toLocaleDateString();
        time = recDate1.toLocaleTimeString();
        let logObj1 = {"fname":fname, "lname": lname, "email": email, "gender": gender, 
            "date": date, "time": time};
        debugger;
        let logArray1 = new Array();
        logArray1.push(logObj1);
        let logStr1 = JSON.stringify(logArray1);
        fs.writeFileSync("log.json", logStr1);
        console.log("files created");
    }
}


getInfo = function(){
    do{
        fname = rdLine.question("Enter your first name please: ");
    }while(fname.length === 0 || fname === undefined || !isNaN(fname));

    do{
        lname = rdLine.question("Enter your last name please: ");
    }while(lname.length === 0 || lname === undefined || !isNaN(lname));

    do{
        email = rdLine.questionEMail("Enter your email adress please: ");
    }while(email.length === 0 || email === undefined || !isNaN(email));

    do{
        gender = rdLine.question("Enter your gender please(in a form of M, F, O, Male, Female or Other): ");
    }while(gender.length === 0 || gender === undefined || !isNaN(gender) ||
        (gender !== "M" && gender !== "F" && gender !== "O" && gender !== "Male" && 
        gender !== "Female" && gender !== "Other"));
}

module.exports={getInfo, logData};