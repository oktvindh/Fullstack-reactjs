// soal2
function readBooksPromise (time, book) {
    console.log("saya mulai membaca " + book.name )
    return new Promise( function (resolve, reject){
      setTimeout(function(){
        let sisaWaktu = time - book.timeSpent
        if(sisaWaktu >= 0 ){
            console.log("saya sudah selesai membaca " + book.name + ", sisa waktu saya " + sisaWaktu)
            resolve(sisaWaktu)
        } else {
            console.log("saya sudah tidak punya waktu untuk baca "+ book.name)
            reject(sisaWaktu)
        }
      }, book.timeSpent)
    })
  }

  var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise ( menggunakan promise ) 
let time = 10000
const execute = (time, index, books_length) => {
    readBooksPromise(time, books[index]) 
    .then((sisaWaktu) => {
        books_length--
        if (books_length > 0){
            execute (sisaWaktu, index = index + 1, books_length)
        }
        
    })
}
execute(time, 0, books.length)
