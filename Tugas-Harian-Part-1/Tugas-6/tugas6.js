// soal 1
var nilaiJohn = 80;
var nilaiDoe = 50;


if (nilaiJohn >= 80){
    console.log("A")
}else if (nilaiJohn >= 70 && nilaiJohn < 80){
    console.log("B")
}else if (nilaiJohn >= 60 && nilaiJohn < 70){
    console.log("C")
}else if (nilaiJohn >= 50 && nilaiJohn < 60){
    console.log("D")
}else{
    console.log("E")
}


if (nilaiDoe >= 80){
    console.log("A")
}else if (nilaiDoe >= 70 && nilaiDoe < 80){
    console.log("B")
}else if (nilaiDoe >= 60 && nilaiDoe < 70){
    console.log("C")
}else if (nilaiDoe >= 50 && nilaiDoe < 60){
    console.log("D")
}else{
    console.log("E")
}
console.log()

// soal 2
var tanggal = 22;
var bulan = 7;
var tahun = 2020;

switch (bulan) {
    case 1: 
        bulan = "Januari" 
        break;
    case 2: 
        bulan = "Februari" 
        break;
    case 3: 
        bulan = "Maret" 
        break;
    case 4: 
        bulan = "April" 
        break;
    case 5: 
        bulan = "Mei" 
        break;
    case 6: 
        bulan = "Juni" 
        break;
    case 7: 
        bulan = "Juli" 
        break;
    case 8: 
        bulan = "Agustus" 
        break;
    case 9: 
        bulan = "September" 
        break;
    case 10: 
        bulan = "Oktober" 
        break;
    case 11: 
        bulan = "November" 
        break;
    case 12: 
        bulan = "Desember" 
        break;
    default:
        bulan = undefined
        break;
}
console.log(tanggal + " " + bulan + " " + tahun)
console.log()

// soal 3
console.log("LOOPING PERTAMA")

var i = 1;
while (i<=20){
    if(i % 2 == 0){
        console.log(i + " - I love coding")
    }
    i++
}

console.log()
console.log("LOOPING KEDUA")

var i = 20
while (i>0){
    if(i % 2 == 0){
        console.log(i + " - I will become a frontend developer")
    }
    i--
}
console.log()


//soal 4
var i = 20;
for (i = 0; i <= 20; i++){
    if(i % 3 == 0 && i % 2 == 1){
        console.log(i + " - I love coding")
    }else if (i % 2 !== 0){
        console.log(i + " - Santai")
    }
    else if (i){
        console.log(i + " - Berkualitas")
    }
}
console.log()


//soal 5
for(i = 1; i <= 7; i++){ 
    var pagar = ""   
    for(j = 1; j <= i; j++){
        pagar += "#"
    }
    console.log(pagar)
}