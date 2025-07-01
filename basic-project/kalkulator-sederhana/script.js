const angkaPertama = document.getElementById("angkaPertama");
const angkaKedua = document.getElementById("angkaKedua");
const tambah = document.getElementById("Tambah");
const kurang = document.getElementById("kurang");
const kali = document.getElementById("kali");
const bagi = document.getElementById("bagi");
const hasil = document.getElementById("Hasil");


tambah.addEventListener ('click',  () => {
    const hasilTambah = Number(angkaPertama.value) + Number(angkaKedua.value)
    hasil.innerHTML = hasilTambah
});

kurang.addEventListener('click', () => {
    const kurang = Number(angkaPertama.value) - Number(angkaKedua.value)
    hasil.innerHTML= kurang
});

bagi.addEventListener('click', () => {
    const bagi = Number(angkaPertama.value) / Number(angkaKedua.value)
    hasil.innerHTML = bagi
});

kali.addEventListener('click', () => {
    const kali = Number(angkaPertama.value) * Number(angkaKedua.value)
    hasil.innerHTML = kali
});

