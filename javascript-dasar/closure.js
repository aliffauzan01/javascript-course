// CLOSEURE
// Fungsi yang dapat mengakses variabel di luar fungsi

function buatTambah(x) {
  return function (y) {
    return x + y;
  };
}

const tambah5 = buatTambah(5);
const tambah10 = buatTambah(10);

console.log(tambah5(8));
console.log(tambah10(2));
