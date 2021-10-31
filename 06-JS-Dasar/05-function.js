/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan
var formatter = new Intl.NumberFormat('in-ID', {
    currency: 'IDR',
  });
  
  const pajakYangHarusDibayar = function(salary) {
      if(salary < 5000000) {
          return "taxCacl should be Rp. 0";
      }else if (salary >= 5000000 && salary < 10000000)  {
          return "taxCacl should be Rp. " + formatter.format(salary*5/100);
      } else if (salary >= 10000000 && salary < 20000000)   {
          return "taxCacl should be Rp. " +  formatter.format(salary*10/100);
      }else if (salary >= 20000000)   {
          return "taxCacl should be Rp. " +  formatter.format(salary*20/100);
      }else {
          return "wrong input"
      }
  }
  console.log(pajakYangHarusDibayar(30000000));
/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.const checkBMI = function(weight,height) 
function checkBMI(weight, height) {
    let bmi = (weight/(height*height)) * 10000;
    if(bmi < 18.5){
    return  "under weight"
  
   }else if (bmi < 24.9){
      return  "normal" 
  
   }else if (bmi < 29.9){
     return  "over weight"
  
   }else if (bmi < 34.9){
     return  "obese"
  
   }return  "extremely obese"
   }
   console.log(checkBMI(80, 170))

/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(string) {
    return "convToUpperCase should be" + " " + string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  console.log(convToUpperCase('riani fitri'));

  /// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(word) {
    let huruf;

    for (let index = 0; index < word.length; index++) {
        huruf = word[index];
        if(huruf == " "){
            return "kata tidak boleh dipisah";
        }
        
    }

    for (let index = 0; index < word.length; index++) {
        huruf = word[index];
        let cek = false;
        for (let j = 0; j < word.length; j++) {
            if(huruf == word[j] && j != index){
                cek = true;
                break;
}
        }
        if(cek == false){
            return huruf;
            break;
        }
    }
    return "";
}
console.log(firstNonRepeatedChar("hello world"));
console.log(firstNonRepeatedChar("alloha"));
console.log(firstNonRepeatedChar("wooohoowh"));