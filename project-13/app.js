let app = require ("express")();
let http = require ("http").Server(app);
let io = require ("socket.io")(http);

let msg1= "";
let name1 = "";

let obj = require("mongoose");  //load the module 
obj.Promise= global.Promise;       // creating the reference. 
let url = "mongodb://localhost:27017/meanstack";
const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
let ChatSchema = obj.Schema({
    name:String,
    msg:String
});
 // Creating Model using schema 
let ChatLog = obj.model("",ChatSchema,"msgData");


app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html");
})

io.on("connection",(socket)=>{
    console.log("Client connected to application.....");

    socket.on("name", (msg) =>{
        name1 = msg;
    })
    socket.on("msg", (msg) =>{
        msg1=msg;
        console.log(name1 + " " + msg1);

        obj.connect(url,mongooseDbOption);   //ready to connect
        let db = obj.connection;    // connected to database. 
        db.on("error",(err)=>console.log(err));
        db.once("open",()=>{
            let chat = new ChatLog({name:name1, msg:msg1});
            chat.save((error,result)=>{
                if(!error){
                    console.log("Record inserter successfully " + result)
                }else{
                    console.log("Error: " + error)
                }
                obj.disconnect();
            })
        })
    })
})

http.listen(9090, ()=> console.log('Server running on port 9090'));