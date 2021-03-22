var cartObj = [];
var cartCnt = 0;
var totalP = 0;
class obj{
    title:string;
    price:string;
}

function addItem(data){
    let obj1 = new obj();
    obj1.title = document.getElementById("title_"+data).textContent;
    obj1.price = document.getElementById("price_"+data).textContent;
    obj1.price = obj1.price.replace('Price: $', '');
    cartObj.push(obj1);
    console.log(cartObj);

    cartCnt++;
    let temp = document.getElementById("itemNumber") as HTMLInputElement;
    temp.innerHTML = "Number of items in your cart: " + cartCnt;

    storeInSession();
}

function storeInSession(){
    sessionStorage.setItem("cartInfo", JSON.stringify(cartObj));
    sessionStorage.setItem("cartCount", JSON.stringify(cartCnt));
}

function saveSession(){
    if(sessionStorage.length !=0 && sessionStorage.getItem !== undefined){
        console.log("we did it");
        cartObj = JSON.parse(sessionStorage.getItem("cartInfo"));
        console.log(cartObj);
        sessionStorage.setItem("cartInfo", JSON.stringify(cartObj));
        cartCnt = JSON.parse(sessionStorage.getItem("cartCount"));
        sessionStorage.setItem("cartCount", JSON.stringify(cartCnt));
        let temp = document.getElementById("itemNumber") as HTMLInputElement;
        temp.innerHTML = "Number of items in your cart: " + cartCnt;
    }
}

function printTable(){
    var obj = JSON.parse(sessionStorage.getItem("cartInfo"));
    for(var i=0; i<obj.length; i++){
        insertNewRecord(obj[i]);
    }
}

function insertNewRecord(data){
    var table = document.getElementById("cartTable");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow();
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    var cell1 = newRow.insertCell(1);
    cell1.innerHTML = "$" + data.price;
    totalP+=parseFloat(data.price);
    let temp = document.getElementById("totalPrice") as HTMLInputElement;
    temp.innerHTML = "Total price: " + totalP;
}