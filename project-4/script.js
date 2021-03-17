var blogObj=[];
var k = 0;
var blogImage = "";

function addBlog(){
    var data = readFromData();
    resetData();
    blogObj.push(data);
    storeInSession();
    printSession();
}

function resetData(){
    document.getElementById("title").value= "";
    document.getElementById("desc").value= "";
    document.getElementById("img").value= "";
}

function readFromData(){
    var obj = {};
    obj.title = document.getElementById("title").value;
    obj.desc = document.getElementById("desc").value;
    obj.img = blogImage;
    console.log(obj);
    return obj;
}

function storeInSession(){
    sessionStorage.setItem("blogInfo", JSON.stringify(blogObj));
}

function saveSession(){
    if(sessionStorage.length !=0 && sessionStorage.getItem !== undefined){
        console.log("we did it");
        blogObj = JSON.parse(sessionStorage.getItem("blogInfo"));
        console.log(blogObj);
        sessionStorage.setItem("blogInfo", JSON.stringify(blogObj));
    }
}

function printSession(){
    var obj = JSON.parse(sessionStorage.getItem("blogInfo"));
    for(var i=k; i<obj.length; i++){
       insertNewBlog(obj[i]);
    }
    k = i;
}

function insertNewBlog(data){
    //create parent element
    var parDiv = document.createElement("div");
    parDiv.className = "card border-secondary mb-3";

    //create title element and push it to parent
    var blogH4 = document.createElement("h4");
    blogH4.className = "card-header";
    blogH4.innerHTML = data.title;
    parDiv.appendChild(blogH4);

    //create div element and push it to parent
    var blogDiv = document.createElement("div");
    blogDiv.className = "card-text";
    blogDiv.innerHTML = data.desc;
    parDiv.appendChild(blogDiv);

    //create image and push it to innerHTML
    var blogImg = document.createElement("img");
    blogImg.className = "card-img-bottom";
    blogImg.src = data.img;
    parDiv.appendChild(blogImg);

    //push parent to html
    document.getElementById("blogList").appendChild(parDiv);
}

function readImg(){
    var tempImg = document.querySelector("#img");
    var imgFile = tempImg.files[0];
    var imgReader = new FileReader();

    imgReader.onload = function(){
        blogImage = imgReader.result;
    }

    imgReader.readAsDataURL(imgFile);
}

