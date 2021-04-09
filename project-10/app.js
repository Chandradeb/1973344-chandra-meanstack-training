let http = require("http");
let url = require("url");
const fs = require('fs');
let port=9999;
let server = http.createServer((req,res)=> {
    res.writeHead(200, {'Content-type':'text/html'});
    console.log(req.url);
    if(req.url != "/favicon.ico"){
        res.write(`
            <form action="/store" method="get">
            <h2>Add your task</h2>
                <label>Employee ID: </label>
                <input type="number" name="empId"/><br/>
                <label>Task Id: </label>
                <input type="number" name="taskId"/><br/>
                <label>Task: </label>
                <input type="text" name="task"/><br/>
                <label>Deadline: </label>
                <input type="date" name="deadline"/><br/>
                <input type="submit" value="Store Task Data"/>
                <input type="reset" value="Reset"/>
            </form>
            <br/>
            <hr>
            

            <form action="/delete" method="get">
                <h2>Delete task</h2>
                <label>Task Id: </label>
                <input type="number" name="taskId"/><br/>
                <input type="submit" value="Delete Task"/>
                <input type="reset" value="Reset"/>
            </form>
            <br/>
            <hr>

            <form action="/display" method="get">
                <h2>Tasks List</h2>
                <input type="submit" value="Display all tasks"/>
            </form>
            <br/>
        
        
        `);
    
        if(req.url.includes("/store")){
            let data = url.parse(req.url,true).query;
            let taskArray = new Array();
            console.log("Task Id is: " + data.taskId);
            let taskObj = {"empId": data.empId, "taskId": data.taskId, "task": data.task, "deadline": data.deadline};
            if(fs.existsSync('log.json')){
                let taskObj2 = fs.readFileSync('log.json');
                let taskStr2 = taskObj2.toString();
                taskArray = JSON.parse(taskStr2);
                let flag = false;
                for(let i=0; i<taskArray.length; i++){
                    if(data.taskId == taskArray[i].taskId){
                        flag = true;
                        break;
                    }
                }

                if(flag == true){
                    console.log("task id already exist")
                }else{
                    taskArray.push(taskObj);
                    let taskStr1 = JSON.stringify(taskArray);
                    fs.writeFileSync('log.json', taskStr1);
                    console.log("data added");
                }
                
            }else{
                taskArray.push(taskObj);
                let taskStr1 = JSON.stringify(taskArray);
                fs.writeFileSync('log.json', taskStr1);
                console.log("files created");
            }
        }
        else if(req.url.includes("/delete")){
            let data = url.parse(req.url,true).query;
            let taskArray = new Array();
            console.log("Task Id for deletion is: " + data.taskId);

            if(fs.existsSync('log.json')){
                let taskObj2 = fs.readFileSync('log.json');
                let taskStr2 = taskObj2.toString();
                taskArray = JSON.parse(taskStr2);
                let flag = false;
                for(let i=0; i<taskArray.length; i++){
                    if(data.taskId == taskArray[i].taskId){
                        taskArray.splice(i, 1);
                        flag = true;
                        break;
                    }
                }
                if(flag == true){
                    let taskStr1 = JSON.stringify(taskArray);
                    fs.writeFileSync('log.json', taskStr1);
                    console.log("Task deleted");

                }else{
                    console.log("No task with that id exists");
                }
            }
            else{
                console.log("There is no task. Please add task")
            }
        }else if(req.url.includes("/display")){
            let taskArray = new Array();
            if(fs.existsSync('log.json')){
                let taskObj2 = fs.readFileSync('log.json');
                let taskStr2 = taskObj2.toString();
                taskArray = JSON.parse(taskStr2);
                let tableData = `
                    <table border="1">
                        <tr>
                            <th>Employee ID</th>
                            <th>Task ID</th>
                            <th>Task</th>
                            <th>Deadline</th>
                        </tr>
                `;
                for(let i=0; i<taskArray.length; i++){
                    tableData +=`
                            <tr *ngFor = let tasks of taskArray>
                                <td>${taskArray[i].empId}</td>
                                <td>${taskArray[i].taskId}</td>
                                <td>${taskArray[i].task}</td>
                                <td>${taskArray[i].deadline}</td>
                            </tr>                   
                    `;
                }

                tableData += `</table>`

                res.end(tableData);
            }else{
                console.log("Tasks does not exist!!")
            }
        }
    }
    res.end();
    
});

server.listen(port,()=>console.log(`Server running on port number ${port}`));