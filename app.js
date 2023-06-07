function incr(){
    var spanElement = document.getElementById("number");
    value=Number(spanElement.innerHTML)+1;
    document.querySelector("#number").innerHTML=value;
    if(value>0){
        spanElement.classList.remove("neg");
        spanElement.classList.add("pos");
    }
    else if(value<0){
        spanElement.classList.remove("pos");
        spanElement.classList.add("neg");
    }
    else{
        spanElement.classList.remove("pos");
        spanElement.classList.remove("neg");
    }
}
function decr(){
    var spanElement = document.getElementById("number");
    value=Number(spanElement.innerHTML)-1;
    document.querySelector("#number").innerHTML=value;
    if(value>0){
        spanElement.classList.remove("neg");
        spanElement.classList.add("pos");
    }
    else if(value<0){
        spanElement.classList.remove("pos");
        spanElement.classList.add("neg");
    }
    else{
        spanElement.classList.remove("pos");
        spanElement.classList.remove("neg");
    }
}
function reset(){
    var spanElement = document.getElementById("number");
    value=Number(spanElement.innerHTML);
    spanElement.innerHTML=0;
    spanElement.classList.remove("pos");
    spanElement.classList.remove("neg");
}
