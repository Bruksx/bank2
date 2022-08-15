var ham = document.getElementsByClassName("ham")[0]
var list = document.getElementsByTagName("ul")[0]

function toggleList(){
    if (!list.style.display){
        list.style.display = "flex"
    }
    else {
        list.style.display = ""
    }
}

ham.addEventListener("click", toggleList)