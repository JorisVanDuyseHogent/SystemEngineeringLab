function switchContrast() {
    if (document.getElementById("body").style.backgroundColor === 'white') {
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("gui-mode").innerHTML = "&#127774;";
    } else { 
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("gui-mode").innerHTML = "&#127772;";
    }
}