// ERROR
// JavaScript memiliki objek Error untuk merepresentasikan kesalahan

try {
    throw new Error("Terjadi kesalahan!");
} catch (e) {
    console.log(e.message);
}