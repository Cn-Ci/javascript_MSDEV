let getMinutesFromHours = (hours) => {
    return hours * 60;
}
let result = getMinutesFromHours(1.25);
console.log(result);
//
let getSecondsFromMinutes = (minutes) => {
    return minutes * 60;
}
result = getSecondsFromMinutes(1.25);
console.log(result);
//
let getSecondsFromHours = (hours) => {
    return hours * 3600;
}
result = getSecondsFromHours(1.25);
console.log(result);
//
let getHoursFromMinutes = (minutes) =>{
    return +(minutes / 60).toFixed(2);
}
result = getHoursFromMinutes(65);
console.log(result);
//
let getMinutesFromSeconds = (seconds) => {
    return +(seconds / 60).toFixed(2);
}
result = getMinutesFromSeconds(66);
console.log(result);
//
let getHoursFromSeconds = (seconds) => {
    return +(seconds / 3600).toFixed(2);
}
result = getHoursFromSeconds(4000);
console.log(result);