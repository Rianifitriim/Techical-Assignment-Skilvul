/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// Variable Scope merupakan wilayah program Anda yang sudah ditentukan. Variabel JavaScript hanya memiliki dua scope. 
//Terdapat dua jenis variabel scope yang ada di JavaScript yaitu Global Variable dan Local Variable.
//Variable local scope yaitu variabel yang dideklarasikan di dalam fungsi pada JavaScript. 
//Variabel lokal hanya dapat diakses dari dalam fungsi tersebut.
//Variabel global JavaScript adalah semua variabel yang dibuat di luar fungsi. Objek semacam itu dapat diakses di seluruh situs web. 

// Contoh Variabel local scope
//dibagian ini variabel 'makanan' tidak dapat diakses
function simpleFunction(){
    var item = "Baju";
    // jika variabel 'makanan' ditaruh di dalam sini maka variabel 'makanan' dapat diakses
  }

//Contoh Variabel global
var item = "Baju";  
// disini kamu bisa menggunakan variabel 'makanan'
function simpleFunction() {   
// disini kamu bisa menggunakan variabel 'makanan'

}
/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///Yang ditampilkan di console.log adalah mariah seperti yang diminta yaitu print first name 
//Tidak menampilkan nilai dari variable name karena yang dituliskan di console.log adalah mariah carey bukan console.log(printFirstName(name));

const name = "John Watson";

function printFirstName(name) {
    return name.split(" ")[0];
  }
  
  console.log(printFirstName("Mariah Carey"));