// THIS
// Mengacu pada object tempat fungsi dipanggil

const mobil = {
  merk: 'Toyota',
  brand: 'Avanza',
  info: function () {
    console.log('Merk mobil ini adalah ' + this.brand);
  },
};

mobil.info();
