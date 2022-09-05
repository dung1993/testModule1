function bac2(a, b, c) {
    let delta = b * b - (4 * a * c);
    let x1;
    let x2;
    if (a == 0 || delta < 0) {
        alert('phương trình vô nghiệm')
    } else if (a != 0 && delta > 0) {
        x1 = -b / (2 * a);
        x2 = -b / (2 * a);
        return alert("Phương trình có nghiệm kép" + x1 + "," + x2);
    } else {
        x1 = (-b + Math.sqrt(delta)) / 2 * a;
        x2 = (-b - Math.sqrt(delta)) / 2 * a;
        return alert("x1 là " + x1, "x2 là " + x2);
    }
}

bac2(8,12,-20);
