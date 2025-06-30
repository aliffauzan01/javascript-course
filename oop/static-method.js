// STATIC METHOD
// Static method dipanggil langsung dari class tanpa membuat instance

class Util {
  static formatRupiah(angka) {
    return 'Rp' + angka.toLocaleString('id-ID');
  }
}

console.log(Util.formatRupiah(1000000)); // Rp1.000.000
