function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve, reject){
      var books=[
          {name: "shinchan", totalPage: 50, isColorful: true},
          {name: "Kalkulus", totalPage: 250, isColorful: false},
          {name: "doraemon", totalPage: 40, isColorful: true},
          {name: "algoritma", totalPage: 250, isColorful: false},
      ]
      if (amountOfPage >= 40) {
          resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
          var reason= new Error("Maaf buku di bawah 40 halaman tidak tersedia")
          reject(reason);
        }
    });
  }

  filterBooksPromise(true, 40)
  .then((a) => {
      console.log(a)
  })

  const filter_books = async () => {
    try{
        let filter_pertama = await filterBooksPromise (false, 250)
        console.log(filter_pertama)
    }catch(a) {
        console.log(a.message)
    }
  
    try{
        let filter_kedua = await filterBooksPromise (true, 30)
        console.log(filter_kedua)
    }catch(a) {
        console.log(a.message)
    }
  
  }
  filter_books()