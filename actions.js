// -------------------------------------------------------------
// HERE IS THE SEARCH BAR CODE PART
// -------------------------------------------------------------

// create database
const database = [
    {
        circuitCode : "code_circuits/parallel_resistors.tex",
        circuitImg  : "img_circuits/parallel_resistors.png",
        circuitAlt  : "Parallel Resistors",
        circuitTags : "parallel resistor "
    },
    {
        circuitCode : "code_circuits/simple_led.tex",
        circuitImg  : "img_circuits/simple_led.png",
        circuitAlt  : "Simple LED",
        circuitTags : "led diode simple "
    },
    {
        circuitCode : "code_circuits/full_wave_rectifier.tex",
        circuitImg  : "img_circuits/full_wave_rectifier.png",
        circuitAlt  : "Full Wave Rectifier",
        circuitTags : "rectifier bridge diode "
    },
    {
        circuitCode : "code_circuits/wheatstone_bridge.tex",
        circuitImg  : "img_circuits/wheatstone_bridge.png",
        circuitAlt  : "Wheatstone Bridge",
        circuitTags : "Wheatstone Bridge "
    },
    {
        circuitCode : "code_circuits/diff_opamp.tex",
        circuitImg  : "img_circuits/diff_opamp.png",
        circuitAlt  : "Diferential OPAMP",
        circuitTags : "Diferential operational amplifier "
    },
    {
        circuitCode : "code_circuits/buffer.tex",
        circuitImg  : "img_circuits/buffer.png",
        circuitAlt  : "Buffer OPAMP",
        circuitTags : "buffer operational amplifier "
    }
];


// short for query selector
function selectElement(selector) {
    return document.querySelector(selector);
}

// show all items when page load
document.addEventListener("DOMContentLoaded", function () {

    for (let index = 0; index < database.length; index++) {

        selectElement(".gallery").innerHTML += `
        <div class="gallery-item">
            <a href="${database[index].circuitCode}">
                <img class="gallery-image" src= "${database[index].circuitImg}" alt="${database[index].circuitAlt}" title="${database[index].circuitAlt}"/>
            </a>
        </div>
        `;
    }
});

// get the results
function getResults() {
    // get the element to search
    const search = selectElement(".searchTerm").value;
    
    selectElement(".gallery").innerHTML = "";

    
    // loop into the searhc term
    for (let index = 0; index < database.length; index++) {
        
        if ( database[index].circuitTags.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ) {

            selectElement(".gallery").innerHTML += `
                <div class="gallery-item">
                    <a href="${database[index].circuitCode}">
                        <img class="gallery-image" src= "${database[index].circuitImg}" alt="${database[index].circuitAlt}" title="${database[index].circuitTitle}"/>
                    </a>
                </div>
                `;
        
        }
    }

}


selectElement(".searchTerm").addEventListener("keyup", getResults);