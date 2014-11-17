soothSayer([3, 4, 5, 6, 7],
    ["JavaScript", "Java", "Python", "C#", "PHP"],
    ["Sofia", "Dublin", "London", "Berlin", "Prague"],
    ["Alfa Romeo", "Fiat", "Lancia", "Subaru", "Skoda"]);

function soothSayer(numbers, progLangs, cities, cars) {
    var time = numbers[Math.floor(Math.random()*numbers.length)];
    var lang = progLangs[Math.floor(Math.random()*progLangs.length)];
    var city = cities[Math.floor(Math.random()*cities.length)];
    var car = cars[Math.floor(Math.random()*cars.length)];

    console.log("You will work " + time + " years on " + lang + ". You will live in "
    + city + " and drive " + car + ".");
}