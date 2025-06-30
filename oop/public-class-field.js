// PUBLIC CLASS FIELD
// Field public bisa ditulis langsung di dalam class

class Karyawan {
    nama = "Tanpa Nama"; // public field

    tampilkan() {
        console.log("Nama:", this.nama);
    }
}

const k = new Karyawan();
k.tampilkan();