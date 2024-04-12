countElement = document.getElementById("count");
saveElement = document.getElementById("output-save");

let count = 0;
let opstring = " ";

function addpassenger(){
    count++;
    countElement.innerText = count;
}

function reset() {
    count = 0;
    countElement.innerText = count;
    saveElement.innerText = " ";
}

function save(){
    // let temp = count + '-';
    saveElement.innerText += count + '-';
}
