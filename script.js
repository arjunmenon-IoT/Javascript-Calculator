function btnclick(val){
    document.getElementById("screen").value = document.getElementById("screen").value+val;

}

function clearscreen(){
    document.getElementById("screen").value = ""
}
function equalclick(){

    var text = document.getElementById("screen").value
    document.getElementById("screen").value = eval(text)



}