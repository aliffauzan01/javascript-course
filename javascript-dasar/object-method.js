// OBJECT METHOD
// Fungsi yang berada di dalam object

const user = {
  nama: 'Eko',
  sapa: function () {
    console.log('Halo, saya ' + this.nama);
  },
};

user.sapa();
