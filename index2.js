function   number(size, max, min, n){
    let listnumbers = new Array(size);
    for (let i = 0; i < listnumbers.length; i++) {
        listnumbers[i] = Math.floor(Math.random() * (max - min +1)) + min;
    }
    count=0;
    for (let i = 0; i < listnumbers.length; i++) {
        if (listnumbers[i] == n) {
            count+=1;
            break;
        } }
    if (count==0){document.write(listnumbers)
        document.write("<br>");
    document.write(`${n} không có trong dãy`)}
    else {document.write(listnumbers);
        document.write("<br>");
    document.write(`${n} có trong dãy`);
    }
}


number(5, 5, 1, 7);