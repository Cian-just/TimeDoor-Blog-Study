function changeText() {
    var replaceText = document.getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "Scroll to see";
    document.getElementById("icon-up").style.display = "none";
    document.getElementById("icon-down").style.display = "block";
}
function dayMode(){
    document.querySelector("body").style.color = "black";
    document.querySelector("body").style.backgroundColor = "white"
}
function nightMode(){
    document.querySelector("body").style.color = "white";
    document.querySelector("body").style.backgroundColor = "black"
}
var btnLike = document.querySelector("#green")
var btnDislike = document.querySelector("#red")

btnLike.onclick = likeColor
btnDislike.onclick = dislikeColor

function likeColor(){
    if (btnDislike.classList.contains("red")){
        btnDislike.classList.remove("red")
    }
    this.classList.toggle("green")
}
function dislikeColor(){
    if(btnLike.classList.contains("green")){
        btnLike.classList.remove("green")
    }
    this.classList.toggle("red")
}
function changeTitle(element){
    element.innerHTML = "Create Simple Game And Website"
}
function changeTitleBack(element) {
    element.innerHTML = "Get Programming Tips Here!";
}
function changeImage(element){
    document.getElementsByClassName("jumbotron-img");
    element.setAttribute("src", "images/img-header2.png")
}
function changeImageBack(element){
    document.getElementsByClassName("jumbotron-img");
    element.setAttribute("src", "images/img-header.png")
}

var myList = document.getElementsByTagName("li");
var i;
for (i=0; i<myList.length; i++){
    var span = document.createElement("span")
    span.innerHTML = "x"
    myList[i].appendChild(span).setAttribute("class", "close");
}

var close = document.getElementsByClassName("close");
var i;
for(i=0; i<close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none"
    }
}

function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    if(inputValue == `` || inputValue == ` `){
        alert("Data cannot be empty!")
    }else{
        document.getElementById("myUL").appendChild(li).setAttribute("class", "search-tags-item");
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    span.innerHTML = "x";
    li.appendChild(span).setAttribute("class", "close");
    for(i=0; i<close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none"
        }
    }
}
var codingProjects = document.querySelectorAll('.project');

codingProjects.forEach( (project, index) => {
    project.dataset.aos = "fade-down"
    project.dataset.aosDuration = 1500;
    //project.dataset.aosDelay = index * 300
});

AOS.init({
    once: true
});