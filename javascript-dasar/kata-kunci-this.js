// THIS
// Mengacu pada object tempat fungsi dipanggil

const mobil = {
    merk: "Toyota",
    info: function () {
        console.log("Merk mobil ini adalah " + this.merk);
    }
};

mobil.info();