// UI
const   currencyone = document.getElementById('currency-one'),
        amountone = document.getElementById('amount-one');

const   currencytwo = document.getElementById('currency-two'),
        amounttwo = document.getElementById('amount-two');

const   swapel = document.getElementById('swap'),
        rateel = document.getElementById('rate');


function calculate(){
    // console.log('hay');

    const crcyone = currencyone.value;
    const crcytwo = currencytwo.value;

    const amtone = amountone.value;
    const amttwo = amounttwo.value;

    const apikey = "7e4a542967a0c864a842c15a";

    const uri = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;
    // console.log(uri);
    
    // AJAX Request
    fetch(uri)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);

        // console.log(data.conversion_rates);
        // console.log(data.conversion_rates.USD);

        const rate = data.conversion_rates[crcytwo];
        // console.log(rate);

        rateel.innerHTML = `1 ${crcyone} = ${rate.toFixed(2)} ${crcytwo}`;

        amounttwo.value = (amountone.value * rate).toFixed(2);
    });

}

// Event Listener
currencyone.addEventListener('change',calculate);
amountone.addEventListener('input',calculate);

currencytwo.addEventListener('change',calculate);
amounttwo.addEventListener('input',calculate);

swapel.addEventListener('click',()=>{
    // console.log('already swap');

    const temp = currencyone.value;

    currencyone.value = currencytwo.value;
    currencytwo.value = temp;

    calculate();
});