console.log("Soru:1")

let sayi = [2, 5, 8, 21, 13];
let i;
let j;
console.log(sayi)

for (j = 0; j < sayi.length; j++) {
    let sonuc = 0;
    for (i = 2; i < sayi[j]; i++) {
        if(sayi[j] == 2){
            //console.log(sayi[j] + "Sayisi asaldir.")
            break;
        }
        else if (sayi[j] % i == 0) {
            //console.log(sayi[j] + "Sayisi asal değildir.")
            sonuc = 1;
            break;
        }
    
    }if(sonuc == 0){
        console.log(sayi[j] + "Sayisi asaldir.")
    }
    else{
        console.log(sayi[j] + "Sayisi asal degildir.")
    }
}

console.log("*********************************************************")

console.log("Soru:2")

function areFriendlyNumbers(number1, number2){
    let sum1 = bolenToplamiHesapla(number1), sum2 = bolenToplamiHesapla(number2);
  
    console.log((number1 == sum2 && number2 == sum1) ? `${number1} ve ${number2} arkadaş sayıdır.` : `${number1} ve ${number2} arkadaş sayı değildir.`)
    }
    function bolenToplamiHesapla(number) {
        let sum = 0;
        for (let i = 0; i < number; i++) {
            if (number % i == 0)
            sum+=i;
            }
            return sum;
    }
    
    console.log(areFriendlyNumbers(1184, 1210));

    console.log("*********************************************************")

    console.log("Soru:3")

    let number = 1;
   for(number = 1; number <= 1000; number++){
        let total = 0;
        for(let i = 1; i < number; i++){
            if(number % i == 0)
            total += i;
        }
        if(total == number)
        console.log(number + " mükemmel sayidir.");
    }

    console.log("*********************************************************")

    console.log("Soru:4")

    let sayi1;
    for(sayi1 = 2; sayi1 <= 1000; sayi1++){
         let sayac = 0;
         for(let i = 2; i < sayi1; i++){
             if(sayi1 % i == 0)
             sayac++;
         }
         if(sayac == 0){
             console.log(sayi1 + " asal sayidir.")
         }
    }