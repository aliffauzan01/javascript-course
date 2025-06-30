function kalkulator(nilaiPertama, operator, nilaiKedua) {
  switch (operator) {
    case '+':
      return nilaiPertama + nilaiKedua;
    case '-':
      return nilaiPertama - nilaiKedua;
    case '*':
      return nilaiPertama * nilaiKedua;
    case '/':
      return nilaiPertama / nilaiKedua;
    default:
      return 'Operator tidak valid';
  }
}

console.log(kalkulator(10, '+', 5));
console.log(kalkulator(10, '-', 5));
console.log(kalkulator(10, '*', 5));
console.log(kalkulator(10, '/', 5));
console.log(kalkulator(10, '%', 5));
