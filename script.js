
//create function
function calculatingTotal(price,qty){
    let subtotal=price*qty;
    return subtotal;
}

function calculatingTaxes(subtotalParm){
    let taxes=subtotalParm*0.16;
    let total=subtotalParm+taxes;
    return total;

}

//return 
let laptop=calculatingTotal(1000,3);
let speakers=calculatingTotal(200,2);

console.log(calculatingTaxes(laptop));
console.log(calculatingTaxes(speakers))