// -------------------------------------------------------------
// HERE IS THE SEARCH BAR CODE PART
// -------------------------------------------------------------

// load from json
let circuits;

function loadDatabase() {

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'database.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            circuits = JSON.parse(this.responseText);
            for (let index = 0; index < circuits.length; index++) {

                selectElement(".gallery").innerHTML += `
                <div class="gallery-item">
                    <a href="${circuits[index].circuitCode}">
                        <img class="gallery-image" src= "${circuits[index].circuitImg}" alt="${circuits[index].circuitAlt}" title="${circuits[index].circuitAlt}"/>
                    </a>
                </div>
                `;
            }
        }
    }

}

// short for query selector
function selectElement(selector) {
    return document.querySelector(selector);
}

// show all items when page load
document.addEventListener("DOMContentLoaded", loadDatabase());

// get the results
function getResults() {
    // get the element to search
    const search = selectElement(".searchTerm").value;

    selectElement(".gallery").innerHTML = "";


    // loop into the searhc term
    for (let index = 0; index < circuits.length; index++) {

        if (circuits[index].circuitTags.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {

            selectElement(".gallery").innerHTML += `
                <div class="gallery-item">
                    <a href="${circuits[index].circuitCode}">
                        <img class="gallery-image" src= "${circuits[index].circuitImg}" alt="${circuits[index].circuitAlt}" title="${circuits[index].circuitAlt}"/>
                    </a>
                </div>
            `;

        }
    }

}


// triggering the search
selectElement(".searchTerm").addEventListener("keyup", getResults);

// cleaning the search
selectElement(".searchButton").addEventListener("click", () => {
    var search = selectElement(".searchTerm");

    search.value = "";
    getResults();
});