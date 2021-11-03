function writeCards(namesArray, occasion) {

    const newArray = [];

    for(let i = 0; i < namesArray.length; i++) {
        newArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${occasion} gift!`);
    }

    return newArray;
}


function countDown(int) {
    while (int > -1){
        console.log(int);
        int--;
    }
}