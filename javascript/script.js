


const euroAlKm = 0.21;

let costoBase = euroAlKm * 100;
console.log(costoBase);


const button = document.querySelector('.btn-primary');


button.addEventListener('click', function() {
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    console.log(km, eta)

    if(isNaN(km) || isNaN(eta)){
        console.log("not a number");
        alert("Bisogna inserire solo numeri.")
        window.location.reload()
        console.log(km, eta);
    }
});


let biglietto = euroAlKm * km; 





