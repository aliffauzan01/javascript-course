// OBJECT METHOD
// Fungsi yang berada di dalam object

const user = {
  nama: 'Eko',
  umur: 20,
  sapa() {
    console.log('Halo, saya ' + this.nama + ', umur saya ' + this.umur);
  },
};

user.sapa();
