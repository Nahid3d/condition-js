let cart = [
    {
        name:"shirt",price: 450
    },
    {
        name:"Jacket", price:850
    },
    {
        name:"shoes",price:300
    }
];

let motMoney =cart[0].price + cart[1].price + cart[2].price;
console.log("total: " + motMoney + ' taka')
if(motMoney > 1000){
console.log('free Dalivery !');
}else{
    console.log('dalivery charge 60 taka');
}



