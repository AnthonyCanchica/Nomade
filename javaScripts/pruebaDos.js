function retrieveFood() {

    var queryURL = "../Jsons/menu.json";

    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            buildTableDos(data.food);
        })
        .catch(function(error) {
            console.log("Error during fetch: " + error.message);
        });
}

function hideClearbuttonDos() {
    var b = document.querySelector("#clear-buttonDos");
    if (!b.classList.contains("hide")) {
        b.classList.toggle("hide");
    }
}

function hideViewbuttonDos() {
    var b = document.querySelector("#view-buttonDos");
    if (!b.classList.contains("hide")) {
        b.classList.toggle("hide");
    }
}


function clearTableDos() {
    document.querySelector("#tableFoodBody").innerHTML = ""; 
    hideClearbuttonDos();
    showViewbuttonDos();
}

function showClearbuttonDos() {
    var b = document.querySelector("#clear-buttonDos");
    b.classList.toggle("hide");
}

function showViewbuttonDos() {
    var b = document.querySelector("#view-buttonDos");
    b.classList.toggle("hide");
}

function buildTableDos(food) {
    clearTableDos();
    var tableBody = document.querySelector("#tableFoodBody");
    var newRow;

    food.forEach(function(curr, index) {
        if (index % 4 === 0) {
            newRow = tableBody.insertRow();
        }

        var foodNameCell = newRow.insertCell();
        foodNameCell.innerHTML = curr.name;

        var foodImageCell = newRow.insertCell();
        foodImageCell.innerHTML = '<img id="imgFood" src=' + curr.image + '>';
    });
    
    hideViewbuttonDos();
    showClearbuttonDos();
}