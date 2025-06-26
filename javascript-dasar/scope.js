// SCOPE
// Scope menentukan aksesibilitas variabel dalam program

function contohScope() {
    let lokal = "Ini variabel lokal";
    console.log(lokal); // Bisa diakses
}

contohScope();
// console.log(lokal); // Error, karena lokal hanya tersedia di dalam fungsi