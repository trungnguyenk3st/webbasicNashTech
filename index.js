// VARIABLES
const productItems = [{
        name: 'Product 1',
        price: 100000,
        image: '../images/product-1.png',
        type: 'woman',
        description: 'This is a description of product 1'
    },
    {
        name: 'Product 2',
        price: 200000,
        image: '../images/product-2.png',
        type: 'woman',
        description: 'This is a description of product 2'
    },
    {
        name: 'Product 3',
        price: 300000,
        image: '../images/product-3.png',
        type: 'woman',
        description: 'This is a description of product 3'
    },
    {
        name: 'Product 4',
        price: 100000,
        image: '../images/product-4.png',
        type: 'men',
        description: 'This is a description of product 4'
    },
    {
        name: 'Product 5',
        price: 200000,
        image: '../images/product-5.png',
        type: 'men',
        description: 'This is a description of product 5'
    },
    {
        name: 'Product 6',
        price: 300000,
        image: '../images/product-6.png',
        type: 'men',
        description: 'This is a description of product 6'
    }
]

const selectdItems = [];


function createProduct(product) {
    const productItemElem = document.createElement('div');
    productItemElem.classList.add('product-item');

    // Create product image
    const productImageElem = document.createElement('img');
    productImageElem.setAttribute('src', product.image);
    productItemElem.appendChild(productImageElem);

    // Create product title
    const productTitleElem = document.createElement('h5');
    productTitleElem.classList.add('product-title');
    productTitleElem.innerHTML = product.name;
    productItemElem.appendChild(productTitleElem);

    // Create product description
    const productDescriptionElem = document.createElement('small');
    productTitleElem.classList.add('product-description');
    productDescriptionElem.innerHTML = product.description;
    productItemElem.appendChild(productDescriptionElem);

    // Create product price
    const productPriceElem = document.createElement('p');
    productPriceElem.innerHTML = `<strong>${product.price}</strong> VND`;
    productItemElem.appendChild(productPriceElem);

    // Create product button
    const productButtonElem = document.createElement('button');
    productButtonElem.classList.add('btn', 'product-button');
    productButtonElem.addEventListener('click', updateCareBadge(product));
    productButtonElem.innerHTML = "ADD TO CART";
    productItemElem.appendChild(productButtonElem);
    console.log(productItemElem);



    return productItemElem;


}


function createWomanProduct(productList) {
    const rowElem = document.getElementById('woman-row');

    // Remove old Nodes
    while (rowElem.hasChildNodes()) {
        rowElem.removeChild(rowElem.firstChild);
    }

    // Create woman List
    const womanItems = productList.filter(p => p.type === 'woman');
    womanItems.forEach(womanProduct => {
        // Create column
        const colElem = document.createElement('div');
        colElem.classList.add('col');
        rowElem.appendChild(colElem);

        colElem.appendChild(createProduct(womanProduct));
    });
}

function createMenProduct(productList) {
    const rowElem = document.getElementById('men-row');
    // Remove old Nodes
    while (rowElem.hasChildNodes()) {
        rowElem.removeChild(rowElem.firstChild);
    }
    const menItems = productList.filter(p => p.type === 'men');
    menItems.forEach(menProduct => {
        // Create column
        const colElem = document.createElement('div');
        colElem.classList.add('col');
        rowElem.appendChild(colElem);

        colElem.appendChild(createProduct(menProduct));
    });

}

function createAllProduct(productList) {
    const rowElem = document.getElementById('all-row');
    // Remove old Nodes
    while (rowElem.hasChildNodes()) {
        rowElem.removeChild(rowElem.firstChild);
    }
    const allItems = productList.filter(p => p.type === 'woman' || p.type === 'men');
    allItems.forEach(allProduct => {
        const colElem = document.createElement('div');
        colElem.classList.add('col');
        rowElem.appendChild(colElem);

        colElem.appendChild(createProduct(allProduct));

    });
}

function updateCareBadge(product) {
    selectdItems.push(product);
    console.log(selectdItems);

    //Query Badge
    document.getElementById('count').innerHTML = selectdItems.length;

    //Update badge HTML

}



// Get Filter 
const filterButtonElem = document.getElementById('filter-btn');
filterButtonElem.addEventListener('click', (e) => {
    e.preventDefault();

    // Get Min/Max  
    const minVal = document.getElementById('min-price-txt').value;
    const maxVal = document.getElementById('max-price-txt').value;

    console.log(minVal, maxVal);


    // Filter products
    const filteredProduct = productItems.filter(product => {
        if (minVal === '' && maxVal === '')
            return product;
        else if (product.price >= minVal && product.price <= maxVal) {
            return product;
        }


    });

    // console.log(filteredProduct);

    // Re-render product list
    createWomanProduct(filteredProduct);
    createMenProduct(filteredProduct);
    createAllProduct(filteredProduct);



})



createWomanProduct(productItems);
createMenProduct(productItems);
createAllProduct(productItems);