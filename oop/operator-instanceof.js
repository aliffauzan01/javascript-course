// OPERATOR instanceof
// Digunakan untuk mengecek apakah objek berasal dari class tertentu

class Kendaraan {}
class Mobil extends Kendaraan {}

const m = new Mobil();
console.log(m instanceof Mobil);       // true
console.log(m instanceof Kendaraan);  // true