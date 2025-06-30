// STATIC METHOD
// Method statis tidak bisa diakses dari instance, hanya dari class langsung

class Kalkulator {
    static tambah(a, b) {
        return a + b;
    }
}

console.log(Kalkulator.tambah(4, 5));