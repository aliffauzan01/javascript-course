const angkaPertama = document.getElementById('angkaPertama');
const angkaKedua = document.getElementById('angkaKedua');
const tambah = document.getElementById('tambah');
const kurang = document.getElementById('kurang');
const kali = document.getElementById('kali');
const bagi = document.getElementById('bagi');
const hasil = document.getElementById('hasil');

tambah.addEventListener('click', () => {
  const hasilTambah = Number(angkaPertama.value) + Number(angkaKedua.value);
  hasil.innerHTML = `${hasilTambah}`;
});

kurang.addEventListener('click', () => {
  const hasilKurang = Number(angkaPertama.value) - Number(angkaKedua.value);
  hasil.innerHTML = `${hasilKurang}`;
});

kali.addEventListener('click', () => {
  const hasilKali = Number(angkaPertama.value) * Number(angkaKedua.value);
  hasil.innerHTML = `${hasilKali}`;
});

bagi.addEventListener('click', () => {
  const hasilBagi = Number(angkaPertama.value) / Number(angkaKedua.value);
  hasil.innerHTML = `${hasilBagi}`;
});
