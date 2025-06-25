const object = {
  nama: 'Eko',
  gender: 'Laki-laki',
  umur: 20,
  hobby: ['coding', 'makan', 'tidur'],
  alamat: {
    kota: 'Bandung',
    provinsi: 'Jawa Barat',
  },
};

// Hapus data di object
delete object.nama;
console.log(object);

// Tambah data di object
object.gender = 'Pria';

console.log(object);
