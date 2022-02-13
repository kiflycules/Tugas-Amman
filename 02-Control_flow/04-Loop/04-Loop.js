// console.log("kiflyyy")


/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let i, j, k ;
function prima (n){
    for(i=1; i<=n; i++){
        j = 0;
        for (k = 1; k <= i; k++){
            if (i % k == 0){
                j++;
            }
        }
        if (j == 2){
            document.write(i+ ' ')
    
    }
}
}
prima(100);

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime = 0;
let m = 1;
// / EDIT HERE
while (primeCounter < 50) {
    m++;
    let elim = false;
    for ( let i = 2; i<= m; i++){
        if(m % i == 0 && m!==i){
            elim = true
        }
    }
    if(elim == false){
        primeCounter++;
        fiftiethPrime = m;
    }
}
console.log(fiftiethPrime);

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let jr = 0;

/// EDIT HERE
do {
    jr++; 
    if(jr % 2 === 1){
        oddCounter++;
        if(oddCounter == 50 ){
            fiftiethOdd = jr ;
            console.log(fiftiethOdd);
        }
    } 
} while (oddCounter < 50 );