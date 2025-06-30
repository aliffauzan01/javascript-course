// GETTER DAN SETTER DI CLASS
// Digunakan untuk mengakses dan mengatur nilai property dengan kontrol tambahan

class Produk {
    constructor() {
        this._harga = 0;
    }

    get harga() {
        return this._harga;
    }

    set harga(value) {
        if (value < 0) {
            console.log("Harga tidak valid");
        } else {
            this._harga = value;
        }
    }
}

const item = new Produk();
item.harga = 15000;
console.log(item.harga);