// soal 1
/*
    Tulis code function di sini
*/
console.log("soal 1")
luasPersegiPanjang = (p, l) => {
    return p * l
}

kelilingPersegiPanjang = (p, l) => {
    return 2 * (p + l)
}

volumeBalok = (p, l, t) => {
    return p * l * t
}

let panjang= 12
let lebar= 4
let tinggi = 8
 
let HasilluasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
let HasilkelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
let HasilvolumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(HasilluasPersegiPanjang ) 
console.log(HasilkelilingPersegiPanjang )
console.log(HasilvolumeBalok )

console.log()

//soal 2
console.log("soal 2")
/* 
    Tulis kode function di sini
*/
const introduce = (...rest) => {
    let [nama, umur, gender, pekerjaan] = rest
    let panggilan = " "

    if (gender == "Laki-Laki"){
        panggilan = "Pak"
    }else {
        panggilan = "Bu"
    }
    return `${panggilan} ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`
}
 
//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce("John", "30", "Perempuan", "penulis")
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

console.log()

// soal 3
console.log("soal 3")
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let atribut = ["nama", "jenisKelamin", "hobi", "tahunLahir"]
let objDaftarPeserta = {}
arrayDaftarPeserta.forEach(function(item, index){
    objDaftarPeserta[atribut [index] ]= item
});
console.log(objDaftarPeserta)

console.log()

//soal 4
console.log("soal 4")
let buah = [
    {nama : "Nanas", warna : "Kuning", "adaBijinya": false, harga : 9000},
    {nama : "Jeruk", warna : "Oranye", "adaBijinya": true, harga : 8000},
    {nama : "Semangka", warna : "Hijau & Merah", "adaBijinya": true, harga : 10000},
    {nama : "Pisang", warna : "Kuning", "adaBijinya": false, harga : 5000},
]

let atributBuah = buah.filter(function(item){
    return item["adaBijinya"] == false
})
console.log(atributBuah)

console.log()

//soal 5
console.log("soal 5")
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
 /* Tulis kode jawabannya di sini */
 let {name : phoneName, brand : phoneBrand, year, colors} = phone
 let [colorBronze, colorWhite, colorBlack] = colors
 // kode di bawah ini jangan dirubah atau dihapus
 console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)

 console.log()

//soal 6
 console.log("soal 6")
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* Tulis kode jawabannya di sini */ 
buku = {
    ...buku,
    ...dataBukuTambahan,
    warnaSampul : [...buku.warnaSampul, ...warna]
}
console.log(buku)

console.log()

//soal 7
console.log("soal 7")
/* 
    Tulis kode function di sini 
*/
function tambahDataFilm(nama, durasi, genre, tahun){
    var atribut = {
        nama : nama,
        durasi : durasi,
        genre : genre,
        tahun : tahun
    }
    dataFilm.push(atribut)
}


let dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)




