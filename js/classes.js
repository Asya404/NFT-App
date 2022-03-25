class EventBrite {

    // to use it right now (properties of the object)
    constructor() {
        this.printNFT();
    }


    // Here we get data with all the crypto, then build the options
    async getCategories() {
        const response = await fetch(`https://api.opensea.io/api/v1/assets?order_direction=desc&limit=100&include_orders=false`)
        const data = await response.json();
        return {
            data
        }
    }


    // Here we requestAPI by chosen values
    async requestAPI(nftId, address) {
        const response = await fetch(`https://api.opensea.io/api/v1/asset/${address}/${nftId}/`);
        const data = await response.json();
        return {
            data
        }
    }


    // Build the options in select
    printNFT() {
        this.getCategories()
            .then(data => {
                const nftList = data.data.assets;
                const categoriesSelect = document.querySelector('#category');
                nftList.forEach(nft => {
                    const option = document.createElement('option');
                    option.value = nft.token_id;
                    option.dataset.contract = nft.asset_contract.address;

                    if(nft.name == null) {
                        option.textContent = nft.asset_contract.name;
                    } else {
                        option.textContent = nft.name;
                        console.log(option.textContent)
                    }
                   
                    categoriesSelect.appendChild(option);
                })
            })
            .catch(error => console.log(error));
    }


    // Prints an error message
    printMessage(message, className) {
        const div = document.createElement('div');
        div.className = className;
        div.textContent = message;
        const messageDiv = document.querySelector('.messages');
        messageDiv.appendChild(div);

        // Remove the message
        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 2000)
    }


    // Prints the result of the valuation
    displayResult(data) {
        let output = '';
        output = `
            <div class="card">
                <div class="card-content">
                    <div class="card__img"><img src="${data.image_url}"></div>
                    <div class="card__text">
                        <div class="card__detail"><p>${data.collection.name}</p></div>
                        <div class="card__detail"><p><span class="card__detail--span">Name:</span> ${(data.name)}</p></div>
                        <div class="card__detail"><p><span class="card__detail--span">Owned by</span> ${(data.name)}</p></div>
                        <div class="card__detail"><p><span class="card__detail--span">Price:</span> ${data.collection.payment_tokens[0].usd_price}$</p></div>
                        <div class="card__detail"><p>${data.description !== null ? data.description.substring(0, 300) : ''} ...</p></div>
                    </div>
                </div>    
            </div>
        `;
        const divResult = document.querySelector('#result');
        divResult.innerHTML = output;
    }

}