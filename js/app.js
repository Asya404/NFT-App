const eventbrite = new EventBrite();
const btn = document.querySelector('#submitBtn');

// on submit read values and print the result
btn.addEventListener('click', (e) => {
    e.preventDefault();

    // read the values
    const eventName = document.querySelector('#event-name').value;
    const category = document.querySelector('#category').value;

    // validating and print the result or error
    if (eventName !== '') {
        // cryptoapi.requestAPI(currencySelect, cryptoSelect)
        //     .then(data => {
        //         data = data.data;
        //         cryptoapi.displayResult(data, currencySelect);
        //     })
    } else {
        eventbrite.printMessage('Add an Event or City', 'error');
    }
})