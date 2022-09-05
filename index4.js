class Staff {
    constructor(fullname, email) {
        this.fullname = fullname;
        this.email = email;
    }

    setFullname(fullname) {
        this.fullname = fullname;
    }

    getFullname() {
        return this.fullname;
    }

    setEmail(email) {
        this.email = email;

    }

    getEmail() {
        return this.email;
    }
    toString() {
        return `<table border="1">
                <tr> 
                    <td> Fullname: </td>
                    <td> ${this.fullname} </td>
                </tr>
                <tr>
                    <td> Email: </td>
                    <td> ${this.email} </td>
                </tr>
                </table>`
    }

}

let david = new Staff("David", "david@gmail.com");
david.setFullname("David Do");
david.setEmail("david.do@gmail.com");
document.write(david.toString());

let staff = [
    new Staff("David", "david@gmail.com"),
    new Staff("Nhoc", "nhoclun@gmail.com"),
    new Staff("Que", "quemua@gmail.com"),
]

for(let i=0; i<staff.length; i++){
    document.write(staff[i].toString());
}