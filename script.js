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
function changeImage(element){
    document.getElementsByClassName("jumbotron-img");
    replaceText[0].innerHTML = "Create Simple Game and Website";
    element.setAttribute("src", "images/img-header2.pngimages/img-header2.png")
}
function changeImageBack(element){
    document.getElementsByClassName("jumbotron-img");
    replaceText[0].innerHTML = "Get Programming Tips Here";
    element.setAttribute("src", "images/img-header.png")
}