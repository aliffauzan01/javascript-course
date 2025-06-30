// ERROR HANDLING
// Gunakan try...catch untuk menangani error saat runtime

try {
    let hasil = 10 / 0;
    if (!isFinite(hasil)) throw new Error("Pembagian tak terhingga");
    console.log(hasil);
} catch (error) {
    console.log("Terjadi Error:", error.message);
}