let angka = 1;

while (angka <= 10) {
  if (angka === 10) {
    console.log('Skip angka ' + angka);
    angka++; // Jangan lupa untuk increment angka agar tidak masuk infinite loop
    continue; // Lanjutkan ke iterasi berikutnya
  }
  console.log('Loop ke-' + angka);
  angka++; // atau bisa juga angka++
}
