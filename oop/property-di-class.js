// PROPERTY DI CLASS
// Property bisa dideklarasikan langsung di constructor.

class Pegawai {
    constructor(nama, jabatan) {
        this.nama = nama;
        this.jabatan = jabatan;
    }
}

const p = new Pegawai("Andi", "Manager");
console.log(p.nama, p.jabatan);