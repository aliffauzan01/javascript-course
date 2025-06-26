// BREAK -- CONTINUE
// Break -> berfungsi untuk menghentikan jalannya baris kode jadi setelah break kode berikutnya tidak dijalankan
// Continue -> berfungsi untuk menjalankan ulang kode jadi baris setelah continue akan dijalankan setelah kode tersebut dijalankan ulang

let angka = 1;

while (angka <= 10) {
  if (angka === 5) {
    console.log('Skip angka ' + angka);
    angka++; // Jangan lupa untuk increment angka agar tidak masuk infinite loop
    continue; // Lanjutkan ke iterasi berikutnya
  }

  console.log('Loop ke-' + angka);
  angka++;
}
