const eventbrite = new EventBrite();
const btn = document.querySelector('#submitBtn');

// on submit read values and print the result
btn.addEventListener('click', (e) => {
    e.preventDefault();

    // read the values
    const nftSelect = document.querySelector('#category');
    const address = nftSelect.options[nftSelect.selectedIndex].getAttribute('data-contract');
    const nftId = document.querySelector('#category').value;
    const eventName = document.querySelector('#event-name');

    // first validate and if its empty => error
    // if not, requestAPI by chosen values, then display result
    if (eventName !== '') {
        eventbrite.requestAPI(nftId, address)
            .then(data => {
                data = data.data;
                console.log(data);
                eventbrite.displayResult(data);
            })
    } else {
        eventbrite.printMessage('Add an Event or City', 'error');
    }
})