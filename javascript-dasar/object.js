const object = {
  nama: 'Eko',
  umur: 20,
};

const arrayOfObject = [
  { name: 'Eko', age: 20 },
  { name: 'Budi', age: 25 },
];

arrayOfObject.push({
  name: 'Joko',
  age: 30,
});

console.log(arrayOfObject[0].name);
