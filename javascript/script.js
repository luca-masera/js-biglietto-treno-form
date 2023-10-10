


const euroAlKm = 0.21;

const costoBase = euroAlKm * 100;
console.log(costoBase);




const button = document.querySelector('.btn-primary');


button.addEventListener('click', function() {
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    console.log(km, eta)

    let biglietto = euroAlKm * km; 

    if(isNaN(km) || isNaN(eta)){
        console.log("not a number");
        alert("Bisogna inserire solo numeri.")
        window.location.reload()
        console.log(km, eta);
    }
    if(eta < 18){
        biglietto = biglietto - (biglietto * 20/100)
        console.log(biglietto)
    }
    else if(eta > 65){
        biglietto = biglietto - (biglietto * 40/100)
        console.log(biglietto)
    }
    
    let costoBiglietto = document.getElementById ('prezzo');
    costoBiglietto.value = '€ '+biglietto.toFixed(2);

});




