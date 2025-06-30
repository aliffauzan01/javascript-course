// SUPER METHOD
// Digunakan untuk memanggil method dari class induk

class Person {
    sayHello() {
        console.log("Hello from Person");
    }
}

class Employee extends Person {
    sayHello() {
        super.sayHello(); // Memanggil method dari class induk
        console.log("Hello from Employee");
    }
}

const e = new Employee();
e.sayHello();