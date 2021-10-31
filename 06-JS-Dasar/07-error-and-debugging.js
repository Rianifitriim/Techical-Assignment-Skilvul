/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error 
/// - Reference Error 
/// - Range Error 
/// - Syntax Error 

/// WRITE YOUR ANALYSIS HERE
/// - Type Error adalah telah terjadi kesalahan tipe
/// - Reference Error adalah jika menggunakan (referensi) variabel yang belum dideklarasikan.
/// - Range Error adalah telah terjadi angka “di luar jangkauan”
/// - Syntax Error adalah terjadi kesalahan sintaks

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

/// WRITE YOUR ANALYSIS HERE
//jika kode dijalankan akan terjadi undefined/error
//termasuk reference error
//karena digunakan sebelum di deklarasikan itu tidak bisa untuk variabel const