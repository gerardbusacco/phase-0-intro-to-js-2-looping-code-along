// Code your solutions in this file
for(let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(arrayofnames, specialevent) {
    console.log(arrayofnames, specialevent)
    const messages = []
for (let i = 0; i < arrayofnames.length; i++) {
    console.log(`Thank you, ${arrayofnames[i]}, for the wonderful ${specialevent} gift!`)
    messages .push(`Thank you, ${arrayofnames[i]}, for the wonderful ${specialevent} gift!`)
}
return messages
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(num) {
while (num >= 0) {
    console.log(num)
    num--
}
}