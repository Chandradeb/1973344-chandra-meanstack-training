var budgetObj=[];
var totalB = 0;

function onFormSubmit(){
   var data = readFromData();
   resetData();
   budgetObj.push(data);
   storeInSession();
}

function readFromData(){
    var obj ={};
    obj.client = document.getElementById("client-name").value;
    obj.project = document.getElementById("project-name").value;
    obj.budget = document.getElementById("budget").value;
    console.log(obj);
    return obj;
}

function storeInSession(){
    sessionStorage.setItem("budgetInfo", JSON.stringify(budgetObj));
}

function resetData(){
    document.getElementById("client-name").value= "";
    document.getElementById("project-name").value= "";
    document.getElementById("budget").value= "";
}

function printTable(){
    var obj = JSON.parse(sessionStorage.getItem("budgetInfo"));
    for(var i=0; i<obj.length; i++){
        insertNewRecord(obj[i], i);
    }
}

function insertNewRecord(data, i){
    var table = document.getElementById("budgetTable");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.client;
    var cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.project;
    var cell1 = newRow.insertCell(2);
    cell1.innerHTML = "$" + data.budget;
    totalB+=parseInt(data.budget);
    totalBudget.innerHTML = "Total budget: $" + totalB;
}

function saveSession(){
    if(sessionStorage.length !=0 && sessionStorage.getItem !== undefined){
        console.log("we did it");
        budgetObj = JSON.parse(sessionStorage.getItem("budgetInfo"));
        console.log(budgetObj);
        sessionStorage.setItem("budgetInfo", JSON.stringify(budgetObj));
        
    }
}