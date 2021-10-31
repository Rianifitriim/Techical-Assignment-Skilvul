/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
function cekPrima( n ) {
    let max = Math.sqrt(n);
    for( let i = 2; i <= max; i++ ) {
    if( n % i == 0 )
    return false;
    }
    return true;
    }
     
    for( let n = 2; n < 100; n++ ) {
    if( cekPrima(n) ) {
    console.log(n);
    }
    }

  /// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 

let primeCounter = 0;
let fiftiethPrime = 50
let hitungpprima = 0
let x = 0

while(primeCounter <= 250){
  primeCounter++
  let count = 0
for(x = primeCounter; x >= 1; x = x - 1){
    if(primeCounter%x === 0){
      count = count + 1
    }
  }
  if(count === 2){
  hitungpprima++
  if(hitungpprima === fiftiethPrime){
  console.log(primeCounter + " ke " + hitungpprima)
  }
  }
}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop

let oddCounter = 0;
let fiftiethOdd = 50
let hitungganjil = 0
do {
  oddCounter++ 
  if(oddCounter % 2 === 1 ){
    hitungganjil++
    if(hitungganjil === fiftiethOdd){
    console.log(oddCounter + " ke " + hitungganjil)
  }
 } 
}
while (oddCounter <= 100)