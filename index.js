

const namesArray = ["Fitz", "Mike", "Annie"];
const messagesArray = [];

function writeCards(namesArray, event) {
    for (let i = 0; i < namesArray.length; i++) {
        messagesArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return messagesArray;
}

let integer = 10

function countDown(integer) {
    while (integer > -1) {
        console.log(integer);
        integer--;
    }
}