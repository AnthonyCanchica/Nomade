function retrieveDrinks() {

    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";

    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            buildTable(data.drinks);
        })
        .catch(function(error) {
            console.log("Error during fetch: " + error.message);
        });
}

function hideClearButton() {
    var b = document.querySelector("#clear-button");
    if (!b.classList.contains("hide")) {
        b.classList.toggle("hide");
    }
}

function hideViewButton() {
    var b = document.querySelector("#view-button");
    if (!b.classList.contains("hide")) {
        b.classList.toggle("hide");
    }
}


function clearTable() {
    document.querySelector("#tableDrinkBody").innerHTML = ""; 
    hideClearButton();
    showViewButton();
}

function showClearButton() {
    var b = document.querySelector("#clear-button");
    b.classList.toggle("hide");
}

function showViewButton() {
    var b = document.querySelector("#view-button");
    b.classList.toggle("hide");
}

function buildTable(drinks) {
    clearTable();
    var tableBody = document.querySelector("#tableDrinkBody");
    var newRow;

    drinks.forEach(function(curr, index) {
        if (index % 4 === 0) {
            newRow = tableBody.insertRow();
        }

        var drinkNameCell = newRow.insertCell();
        drinkNameCell.innerHTML = curr.strDrink;

        var drinkImageCell = newRow.insertCell();
        drinkImageCell.innerHTML = '<img id="imgDrink" src=' + curr.strDrinkThumb + '>';
    });
    
    hideViewButton();
    showClearButton();
}
