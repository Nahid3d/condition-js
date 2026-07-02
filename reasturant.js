let age = 11 ;
let price = 500;
if(age <=12 ){
    console.log('free ticket');
}
else if(age <=30 ){
    // discount 5%
    const discount =price * 5 / 100;
    console.log("discount price: " + (price - discount) + ' taka');
}
else if (age <=50 ){
    // 10% discount 
    const discount = price * 10 / 100;
    console.log('discount price:' + (price - discount) +"taka");
}
else if(age <=60 ){
    // 20% discount
    const discount = price * 20 / 100;
    console.log('discount price:' + (price - discount) + "taka")
}
else{
    console.log('ticket price ' + price + ' taka');
}