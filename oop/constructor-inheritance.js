// CONSTRUCTOR INHERITANCE
// Kita dapat mewarisi constructor lain menggunakan call()

function Kendaraan(merk) {
    this.merk = merk;
}

function Motor(merk, tipe) {
    Kendaraan.call(this, merk);
    this.tipe = tipe;
}

const motor1 = new Motor("Yamaha", "Matic");
console.log(motor1);