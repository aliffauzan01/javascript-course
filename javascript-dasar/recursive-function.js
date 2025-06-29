// RECURSIVE FUNCTION
// Fungsi yang memanggil dirinya sendiri

function fibonacci(n) {
  n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));
