let obj = require("mongoose");  //load the module 
obj.Promise= global.Promise;       // creating the reference. 
const fs = require('fs'); //load module
let url = "mongodb://localhost:27017/meanstack";
const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url,mongooseDbOption);   //ready to connect 
let db = obj.connection;    // connected to database. 
db.on("error",(err)=>console.log(err));
db.once("open",()=>{

    //Defined the Schema 
    let ProductSchema = obj.Schema({
        _id:Number,
        source:String,
        destination:String,
        sourceLocation:String,
        destinationLocation:String,
        callDuration:String,
        roaming:String,
        callCharge:String
    });
    // Creating Model using schema 
    let Product = obj.model("",ProductSchema,"callData");

    let logObj = fs.readFileSync('call_data.json');
    let logStr = logObj.toString();
    logArray = JSON.parse(logStr);
    logArray.forEach(element => {
        if(element!=null){
            let prod = new Product({_id:element._id, source:element.source, destination:element.destination, sourceLocation: element.sourceLocation, 
                destinationLocation:element.destinationLocation, callDuration:element.callDuration, roaming:element.roaming, callCharge:element.callCharge})
            prod.save((error, result)=>{
                if(!error){
                    console.log("Record inserted successfully " + result)
                }else{
                    console.log("Error: " + error)
                }
                obj.disconnect(); 
            })
        }
    });



    // Creating reference using model 
    // let p1 = new Product({_id:103,pname:"Laptop",price:85000});
    // p1.save((err,result)=>{
    //     if(!err){
    //         console.log("record inserted successfully"+result)
    //     }else {
    //         console.log(err);
    //     }
    //     obj.disconnect();       //close the connectiond..
    // })

})

