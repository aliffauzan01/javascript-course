const object = {
  nama: 'Eko',
  umur: 20,
  hobby: ['coding', 'makan', 'tidur'],
  alamat: {
    kota: 'Bandung',
    provinsi: 'Jawa Barat',
  },
};

const arrayOfObject = [
  { name: 'Eko', age: 20 },
  { name: 'Budi', age: 25 },
];

arrayOfObject.push({
  name: 'Joko',
  age: 30,
});

console.log(object.alamat.provinsi);
