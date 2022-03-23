class EventBrite {

    // to use it right now
    constructor() {
        this.auth_token = 'NJWHOQLOPMVRIWASRYGU';
        this.printCrypto();
    }

    // Here we get data with all the crypto, then build the options
    async getCategories() {
        const response = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`)
        const data = await response.json();
        return {
            data
        }
    }

    // Build the options in select
    printCrypto() {
        this.getCategories()
            .then(data => {
                const categoriesList = data.data.categories;
                const categoriesSelect = document.querySelector('#category');
                categoriesList.forEach(category => {
                    const option = document.createElement('option');
                    option.value = category.id;
                    option.textContent = category.name; 
                    categoriesSelect.appendChild(option);
                })
                console.log(categoriesList);
            })
            .catch(error => console.log(error));
    }
}