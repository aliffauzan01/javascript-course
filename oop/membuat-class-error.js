// MEMBUAT CLASS ERROR
// Kita bisa membuat custom class error dengan extends Error

class ValidasiError extends Error {
    constructor(pesan) {
        super(pesan);
        this.name = "ValidasiError";
    }
}

function validasiNama(nama) {
    if (!nama) throw new ValidasiError("Nama tidak boleh kosong");
}

try {
    validasiNama("");
} catch (e) {
    console.log(`${e.name}: ${e.message}`);
}