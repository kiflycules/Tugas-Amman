// console.log("aecyro niiih bos")

/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
// 1. Type error = Telah Terjadi Kesalah Type. Ini terjadi saat kita menggunakan nilai yang berada di luar kisaran tipe 
//                 yg diharapkan.
// 2. Reference Error = Ini terjadi jika kita menggunakan (referensi) variabel yang belum dideklarasikan.
// 3. Range Error = Ini terjadi jika kita menggunakan angka yang berada di luar rentang nilai ilegal.
// 4. Syntax Error = kesalahan dalam tata bahasa atau dalam struktur code nya.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
// 1. akan terjadi error 
// 2. kategori syntax error 
// 3. karena setelah kita membuat variabel, baru kita bisa kita console di bawah bukan di atas karena variabel scope nya tidak pas



var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
// var salaryWithVar = 6;
// const salaryWithConst = 7;

console.log(salaryWithVar);
console.log(salaryWithConst);
