const daftarSiswa = [];

function tambahSiswa(nama, umur, jurusan) {
  const siswa = {
    nama: nama,
    umur: umur,
    jurusan: jurusan,
  };
  daftarSiswa.push(siswa);
}

function tampilkanSiswa() {
  for (siswa of daftarSiswa) {
    console.log(
      `Nama: ${siswa.nama}, Umur: ${siswa.umur}, Jurusan: ${siswa.jurusan}`,
    );
  }
}

tambahSiswa('Eko', 20, 'Teknik Informatika');
tambahSiswa('Budi', 20, 'Teknik Informatika');
tambahSiswa('Wati', 20, 'Teknik Informatika');

tampilkanSiswa();
