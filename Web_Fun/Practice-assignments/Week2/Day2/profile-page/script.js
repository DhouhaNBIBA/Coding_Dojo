console.log("page loaded...");
var use = document.querySelector("#user");
var request= document.querySelector("#req-num");
var conx= document.querySelector("#con-num")


function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    request.innerText--;
    conx.innerText++;
}
function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    request.innerText--;
}


function changer(){
    use.innerText="Phil E";
}