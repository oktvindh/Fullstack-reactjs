// soal 1
console.log("soal 1")
let word = 'JavaScript'; 
let second = 'is'; 
let third = 'awesome'; 
let fourth = 'and'; 
let fifth = 'I'; 
let sixth = 'love'; 
let seventh = 'it!';

let kalimat = `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}!`;
console.log(kalimat);
console.log();

//soal 2
console.log("soal 2");
let kataPertama = "saya"; 
let kataKedua = "senang"; 
let kataKetiga = "belajar"; 
let kataKeempat = "javascript";

let hasil = kataPertama + " " + (kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1)) + " " +
            (kataKetiga.slice(0, kataKetiga.length - 1) + kataKetiga.charAt(6).toUpperCase()) + " " + 
            kataKeempat.toUpperCase();
console.log(hasil);
console.log();

// soal 3
console.log("soal 3");
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";
let panjang = parseInt(panjangPersegiPanjang);
let lebar = parseInt(lebarPersegiPanjang);

let kelilingPersegiPanjang = ( 2 * panjang) + ( 2 * lebar);
console.log(kelilingPersegiPanjang);  // keliling persegi panjang

let alasSegitiga= "6";
let tinggiSegitiga = "7";
let alas = parseInt(alasSegitiga);
let tinggi = parseInt(tinggiSegitiga); // luas segitiga

let luasSegitiga = (0.5 * alas * tinggi);
console.log(luasSegitiga);
console.log();

// soal 4
console.log("soal 4");
let sentences= 'wah javascript itu keren sekali'; 

let firstWords = sentences.substring(0, 3); 
let secondWords = sentences.substring(4, 14); // do your own! 
let thirdWords = sentences.substring(15, 18); // do your own! 
let fourthWords = sentences.substring(19, 24); // do your own! 
let fifthWords = sentences.substring(25, 31); // do your own!  

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);
console.log();

// soal 5
console.log("soal 5")
var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0];
var exampleSecondWord = sentence[2] + sentence[3];
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var seventhWord = sentence[23] + sentence[24];
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] +  sentence[33] + sentence[34];


/*
var exampleFirstWord = sentence.substr(0, 1);
var exampleSecondWord = sentence.substr(2, 2);
var thirdWord = sentence.substr(5, 5);
var fourthWord = sentence.substr(11, 2);
var fifthWord = sentence.substr(14, 2);
var sixthWord = sentence.substr(17, 5);
var seventhWord = sentence.substr(23, 2);
var eighthWord = sentence.substr(26, 9);
*/


console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)
console.log();

// soal 6
console.log("soal 6")
let txt = "I can eat bananas all day";
let result = txt.slice(10, -8); //lakukan pengambilan kalimat di variable ini

console.log(result);
