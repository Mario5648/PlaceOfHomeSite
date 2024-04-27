function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

function setupAutocomplete(states) {
    const input = document.getElementById('autocomplete-input');
    const resultsDiv = document.getElementById('autocomplete-results');
    
    input.disabled = false; // Enable the input
    input.placeholder = "Please input a city";

    const debouncedFilter = debounce(function() {
        const inputValue = input.value;
        resultsDiv.innerHTML = ''; // Clear previous results

        if (inputValue.length > 0) {
            const filteredStates = states.filter(state => 
                state.toLowerCase().startsWith(inputValue.toLowerCase())
            );

            filteredStates.forEach(function(state) {
                const div = document.createElement('div');
                div.textContent = state;
                div.onclick = function() {
                    input.value = state;
                    resultsDiv.innerHTML = '';
                };
                resultsDiv.appendChild(div);
            });
        }
    }, 250);

    input.oninput = debouncedFilter;

    // Handle the 'Enter' key to select the top autocomplete result
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default form submit behavior
            const firstResult = resultsDiv.firstChild;
            if (firstResult) {
                input.value = firstResult.textContent; // Set the input to the first result
                resultsDiv.innerHTML = ''; // Clear the results
            }
        }
    });
}