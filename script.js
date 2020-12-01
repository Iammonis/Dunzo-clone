
function signInModal(){
    var modal = document.getElementById("modal");
    modal.style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
}

function closeModal(){
    var modal = document.getElementById("modal");
    modal.style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
}

function changeColor(){
    var changeColor = document.getElementById("div-input-modal-1")
    changeColor.style.borderBottom = "2px solid lightgreen";
}

function revertColor(){
    var changeColor = document.getElementById("div-input-modal-1")
    changeColor.style.borderBottom = "2px solid lightgrey";
}

