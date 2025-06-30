## Tugas 2: Program Pengelolaan Data Siswa

### 🎯 Deskripsi Tugas

Buatlah sebuah program untuk mengelola daftar siswa. Program ini harus memiliki kemampuan untuk menambah data siswa baru dan menampilkan seluruh daftar siswa yang telah tersimpan. Data setiap siswa harus disimpan dalam bentuk `object`.

**Spesifikasi:**

1.  Buat sebuah array kosong bernama `daftarSiswa` untuk menyimpan semua data siswa.
2.  Buat sebuah _function_ bernama `tambahSiswa()` yang menerima parameter `nama`, `umur`, dan `jurusan`. Fungsi ini bertugas membuat sebuah `object` siswa baru, lalu menambahkannya ke dalam array `daftarSiswa`.
3.  Buat sebuah _function_ bernama `tampilkanSiswa()` yang akan menampilkan seluruh data siswa dari array `daftarSiswa` ke konsol dengan format yang rapi.

### 🛠️ Konsep yang Diuji

- `Tipe Data Array`
- `Tipe Data Object`
- `Function` (dengan parameter)
- `For...of Loop` untuk iterasi array
- `console.log()` untuk menampilkan output

### 💻 Contoh Output

Setelah memanggil `tambahSiswa("Budi", 17, "Rekayasa Perangkat Lunak")` dan `tambahSiswa("Ana", 18, "Multimedia")`, maka pemanggilan `tampilkanSiswa()` akan menghasilkan:

```
--- Daftar Siswa ---
Nama: Budi, Umur: 17, Jurusan: Rekayasa Perangkat Lunak
Nama: Ana, Umur: 18, Jurusan: Multimedia
--------------------
```
