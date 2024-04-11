const freelancers = [
    { name: 'Carol', occupation: 'Programmer', startingPrice: '$70' },
    { name: 'John', occupation: 'Engineer', startingPrice: '$120' },
    { name: 'Steve', occupation: 'Cashier', startingPrice: '$20' },
    { name: 'James', occupation: 'Athlete', startingPrice: '$200' }
];

function stopInterval(timer) {
    if (freelancers.length === 0) {
        clearInterval(timer);
    }
}

function calculateAverage() {
    const prices = document.getElementsByClassName('price');
    const slicedPrices = [];
    for (let i = 0; i < prices.length; i++) {
        currentPrice = prices[i].textContent;
        numOnly = currentPrice.slice(1);
        slicedPrices.push(parseInt(numOnly));
    }
    const sum = slicedPrices.reduce((total, current) => total + current, 0);
    const average = Math.round(sum/prices.length);
    const priceSpan = document.querySelector('span');
    priceSpan.innerHTML = `$${average}`;
}



function createFreelancer(array) {
    const tableSelect = document.querySelector('table');
    const nextFreelancer = array.pop();
    const newTr = document.createElement('tr')
    newTr.innerHTML = `<td>${nextFreelancer.name}</td><td>${nextFreelancer.occupation}</td><td class="price">${nextFreelancer.startingPrice}</td>`;
    tableSelect.appendChild(newTr);
    calculateAverage();
    stopInterval(timer);
}

const timer = setInterval(() => createFreelancer(freelancers), 5000);
// createFreelancer(freelancers);






// const nameSection = document.getElementById("name");

// for (let i = 0; i < 2; i++) {
//     const currentItem = freelancers[i].name;
//     const newP = document.createElement('p');
//     newP.textContent = currentItem;
//     nameSection.appendChild(newP);
// }

// const occupationSection = document.getElementById("occupation");

// for (let i = 0; i < 2; i++) {
//     const currentItem = freelancers[i].occupation;
//     const newP = document.createElement('p');
//     newP.textContent = currentItem;
//     occupationSection.appendChild(newP);
// }

// const priceSection = document.getElementById("starting-price");

// for (let i = 0; i < 2; i++) {
//     const currentItem = freelancers[i].startingPrice;
//     const newP = document.createElement('p');
//     newP.textContent = `$${currentItem}`;
//     priceSection.appendChild(newP);
// }

