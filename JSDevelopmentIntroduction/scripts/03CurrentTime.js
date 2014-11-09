/**
 * Created by GTX on 9.11.2014 г..
 */
var currTime = new Date();
var hours = currTime.getHours();
var minutes = currTime.getMinutes() < 10 ? "0" + currTime.getMinutes() : currTime.getMinutes();
console.log(hours + ":" + minutes);