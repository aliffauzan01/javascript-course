// CONSTRUCTOR DI CLASS
// Constructor adalah method khusus yang dipanggil saat objek dibuat dari class.

class Buku {
    constructor(judul) {
        this.judul = judul;
    }
}

const buku1 = new Buku("Belajar JavaScript");
console.log(buku1.judul);