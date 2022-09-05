var arrayNegative = ["a", "o", "e","u", "i"];
function checkNegative(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < arrayNegative.length; j++) {
            if (array[i].toLowerCase() == arrayNegative[j]) {
                count++;
            };
        };
    };
    if(count != 0){
        return count;
    }else {
        return false;
    }
}

let array = prompt("nhập chuỗi ký tự").split("");
alert(`Chuỗi [${array}] có ${checkNegative(array)} ký tự âm của mảng [${arrayNegative}]` );