// PROPERTY DI CONSTRUCTOR FUNCTION
// Property ditambahkan melalui kata kunci this di dalam constructor function.

function Mobil(merk) {
    this.merk = merk;
}

const mobil1 = new Mobil("Toyota");
console.log(mobil1.merk);