function addInputField() {

    if(document.getElementById('zipCodeInputContainer').querySelectorAll('span').length < 5)
    {


        const container = document.getElementById('zipCodeInputContainer');
        const newInput = document.createElement('span');
        newInput.innerHTML = `<label for="zipCodeInput">Zip Code:</label><br>
                            <input style="width:360px;"class="input-field zipCodeInputField" id="zipCodeInput" name="zipCodeInput" type="number"></input><br>
                            <br>`;
        container.appendChild(newInput);
    }
}

function removeInputField() {
    const container = document.getElementById('zipCodeInputContainer');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

function getAllZipCodeValues() {
    const inputs = document.querySelectorAll('.zipCodeInputField'); // Select all inputs with the class 'zipCodeInput'
    ZIPCODES = Array.from(inputs).map(input => input.value); // Map over the NodeList to extract values
}