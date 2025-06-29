// FUNCTION DALAM FUNCTION
// Fungsi dalam fungsi adalah fungsi yang bisa dijalankan di dalam fungsi lain

function pertama(a, b) {
  function kedua() {
    return a + b;
  }

  console.log(kedua());
}

pertama(2, 3);
