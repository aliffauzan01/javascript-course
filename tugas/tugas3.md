## Tugas 3: Kalkulator Sederhana dengan Function

### 🎯 Deskripsi Tugas

Buatlah sebuah kalkulator fungsional menggunakan JavaScript. Program ini harus mampu melakukan operasi matematika dasar (penjumlahan, pengurangan, perkalian, dan pembagian) dengan memanfaatkan `function` untuk setiap operasinya.

**Spesifikasi:**

1.  Buat empat _function_ terpisah untuk setiap operasi: `tambah()`, `kurang()`, `kali()`, dan `bagi()`. Masing-masing fungsi ini menerima dua parameter angka dan mengembalikan (_return_) hasil perhitungannya.
2.  Buat satu _function_ utama bernama `kalkulator()` yang menerima tiga parameter: `angka1`, `operator` (dalam bentuk string seperti `"+"`, `"-"`, `"*"`, atau `"`/`"`), dan `angka2`.
3.  Di dalam `kalkulator()`, gunakan `Switch Expression` atau `If Expression` untuk menentukan operasi mana yang harus dijalankan berdasarkan parameter `operator`. Fungsi ini kemudian memanggil fungsi matematika yang sesuai dan mengembalikan hasilnya.

### 🛠️ Konsep yang Diuji

- `Function` (dengan parameter dan `return value`)
- `Switch Expression` atau `If...Else Expression`
- `Operator Matematika`
- Memanggil fungsi dari dalam fungsi lain

### ✨ Tantangan Tambahan (Opsional)

Modifikasi fungsi `tambah()` dan `kali()` agar dapat menerima jumlah argumen yang tidak terbatas (misalnya, `tambah(1, 2, 3, 4, 5)`) dengan menggunakan `Rest Parameter` (`...`).

### 💻 Contoh Output

```javascript
console.log(kalkulator(10, '+', 5)); // Output: 15
console.log(kalkulator(20, '*', 3)); // Output: 60
console.log(kalkulator(100, '/', 4)); // Output: 25
```
