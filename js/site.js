// Main Function to perform the fizz buzz
function fizzBuzz() {
    // get fizz and buzz
    let fizz = document.getElementById("fizzValue").value;
    let buzz = document.getElementById("buzzValue").value;

    fizz = parseInt(fizz);
    buzz = parseInt(buzz);

    // validate input
    let notValid = !Number.isInteger(fizz) || !Number.isInteger(buzz);
    if (notValid) {
        alert("Must be a number");
        return;
    }

    // generate array[100] of fizz/buzz
    let arrFizzBuzz = generateFizzBuzz(fizz, buzz);

    // push results to screen
    displayFizzBuzz(arrFizzBuzz);
}

// generate an array of numbers, fizz, buzz and fizz buzz
function generateFizzBuzz(fizz, buzz) {
    let arrFB = [0];
    for (let index = 1; index <= 100; index++) {
        if (index % fizz == 0 && index % buzz == 0) {
            arrFB.push("FizzBuzz")
        } else if (index % fizz == 0) {
            arrFB.push("Fizz");
        } else if (index % buzz == 0) {
            arrFB.push("Buzz");
        } else {
            arrFB.push(index);
        }
    }
    return arrFB;
}

// display fizzbuzz array onto screen in table format
function displayFizzBuzz(arrFizzBuzz) {
    let tableBody = document.getElementById("results");
    let tableHeader = document.getElementById("fbHeader");
    let fbTemplate = document.getElementById("fbTemplate");
    tableBody.innerHTML = "";
    tableBody.appendChild(tableHeader);

    for (let i = 1; i < arrFizzBuzz.length; i += 5) {
        const templateRow = document.importNode(fbTemplate, true);
        rowCols = templateRow.querySelectorAll("td");

        rowCols[0].classList.add(arrFizzBuzz[i]);
        rowCols[0].textContent = arrFizzBuzz[i];

        rowCols[1].classList.add(arrFizzBuzz[i + 1]);
        rowCols[1].textContent = arrFizzBuzz[i + 1];

        rowCols[2].classList.add(arrFizzBuzz[i + 2]);
        rowCols[2].textContent = arrFizzBuzz[i + 2];

        rowCols[3].classList.add(arrFizzBuzz[i + 3]);
        rowCols[3].textContent = arrFizzBuzz[i + 3];

        rowCols[4].classList.add(arrFizzBuzz[i + 4]);
        rowCols[4].textContent = arrFizzBuzz[i + 4];

        tableBody.appendChild(templateRow);
    }
}