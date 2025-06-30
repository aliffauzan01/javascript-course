const array = [1, 2, 3];

const object = { nama: 'Eko', umur: 20 };

const { nama, umur } = object;
console.log(nama, umur);

const [a, b, c] = array;
console.log(a, b, c);

const sapa = (object) => {
  console.log('Halo, nama saya ' + object.nama + ', umur saya ' + object.umur);
};

sapa(object);
