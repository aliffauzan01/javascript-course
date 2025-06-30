// SCOPE
// Scope menentukan aksesibilitas variabel dalam program
let lokal = 'Ini variabel lokal';

function contohScope() {
  let lokal = 'Ini variabel lokal2';
  console.log(lokal); // Bisa diakses
}

function contohScope1() {
  //   let lokal = 'Ini variabel lokal1';
  console.log(lokal); // Bisa diakses
}

contohScope();
contohScope1();
