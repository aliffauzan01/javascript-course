// SUPER CONSTRUCTOR
// super() digunakan untuk memanggil constructor di parent class

class Binatang {
    constructor(nama) {
        this.nama = nama;
    }
}

class Kucing extends Binatang {
    constructor(nama, warna) {
        super(nama);
        this.warna = warna;
    }
}

const kitty = new Kucing("Milo", "Putih");
console.log(kitty.nama, kitty.warna);