const mainDiv = document.querySelector(".display-div");
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
        createElement(element);
    });
  })
let i = 0;
function createElement(element) {
    i++;
    const childDiv = document.createElement("div");
    childDiv.classList.add("card");

    const title = document.createElement('p');
    title.innerText = "The title is : " + element.title;

    const id = document.createElement('p');
    id.innerText = "The id is : " + element.id;

    const number = document.createElement('p');
    number.textContent = i + ".)";

    childDiv.append(number);
    childDiv.appendChild(title);
    childDiv.appendChild(id);
    mainDiv.appendChild(childDiv);
    
}