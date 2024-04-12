homedisplay = document.getElementById("homenumop");
guestdisplay = document.getElementById("guestnumop");

let hres = 0;
let gres = 0;


function addone(){
    hres += 1;
    homedisplay.innerText = hres;
}


function addtwo(){
    hres += 2;
    homedisplay.innerText = hres;
}


function addthree(){
    hres += 3;
    homedisplay.innerText = hres;
}



function gaddone(){
    gres += 1;
    guestdisplay.innerText = gres;
}


function gaddtwo(){
    gres += 2;
    guestdisplay.innerText = gres;
}

function gaddthree(){
    gres += 3;
    guestdisplay.innerText = gres;
}



