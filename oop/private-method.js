// PRIVATE METHOD
// Method yang tidak bisa diakses dari luar class

class Rahasia {
    #kode() {
        console.log("Ini rahasia");
    }

    buka() {
        this.#kode();
    }
}

const r = new Rahasia();
r.buka();
// r.#kode(); // Error