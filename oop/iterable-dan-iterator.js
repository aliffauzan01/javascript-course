// ITERABLE DAN ITERATOR
// Objek iterable bisa diiterasi menggunakan for...of. Harus memiliki method Symbol.iterator

const koleksi = {
    data: [1, 2, 3],
    [Symbol.iterator]() {
        let i = 0;
        const data = this.data;
        return {
            next() {
                return {
                    value: data[i],
                    done: i++ >= data.length
                };
            }
        };
    }
};

for (let angka of koleksi) {
    console.log(angka);
}