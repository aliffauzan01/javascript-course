// PARAMETER DI CONSTRUCTOR FUNCTION
// Parameter memungkinkan kita mengisi nilai property saat membuat objek.

function Produk(nama, harga) {
    this.nama = nama;
    this.harga = harga;
}

const p = new Produk("Laptop", 12000000);
console.log(p.nama, p.harga);