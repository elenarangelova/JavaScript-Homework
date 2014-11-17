/**
 * Created by GTX on 12.11.2014 г..
 */

function convertKWtoHP(numberkW){
     var numberHP = numberkW / 0.745699872;
    return numberHP.toFixed(2);
}

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));