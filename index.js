const apple = 123.965, meat = 90.2345, cola = 15.678;
console.log('яблуко =',apple, "\n курка =", meat, "\n кола =", cola );

const maxPrice = Math.max(cola, meat, apple );
console.log("максимальна ціна =", maxPrice);

const minPrice = Math.min(cola, meat, apple );
console.log("мінімальна ціна =", minPrice);

const sum = cola + meat + apple;
console.log("сума цін =", sum);

let floorCola = Math.floor(cola);
console.log("ціла ціна коли =",floorCola);

let floorMeat = Math.floor(meat);
console.log("ціла ціна курки  =",floorMeat);

let floorApple = Math.floor(apple);
console.log("ціла ціна яблука =",floorApple);

const entireSum = floorApple + floorMeat + floorCola;
console.log("ціла сума =", entireSum);

const sumToH =  Math.round( cola / 100 + meat / 100 + apple / 100) * 100;
console.log("сума до сотень =", sumToH );

function even_or_odd(entireSum) {
    return entireSum % 2 === 0
}
console.log(even_or_odd(entireSum));

const grn =500;
const zdachaCola = grn - cola, zdachaApple = grn - apple, zdachaMeat = grn - meat;
console.log('решта за колу =', zdachaCola, "\n решта за яблука =", zdachaApple, "\n решта за курку =", zdachaMeat);

const zdachaAll = grn - sum;
console.log( "решта якщо купити всі продукти =",zdachaAll);

console.log( "окуруглення до двох знаків :", "\n кола =",cola.toFixed(2),"\n мясо=",meat.toFixed(2)  , "\n яблуко =",apple.toFixed(2) );


let dis = Math.trunc(Math.random() * 100);
let priceDis = sum /  100 * dis ;
console.log("ваша знижка =",dis, "%", "або", priceDis.toFixed(2), "grn");
let priceWithDis = sum - priceDis;
console.log("до оплати ",priceWithDis.toFixed(2));

const cost = sum/2;
console.log('прибуток за планом',cost.toFixed(2),"grn");
console.log("втрачена вигода",priceDis.toFixed(2) ,"grn");
let finalCost = cost - priceDis;
console.log( "прибуток",finalCost.toFixed(2), 'grn');


