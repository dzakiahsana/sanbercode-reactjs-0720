var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
function membaca(waktu,index) {
    readBooksPromise(waktu, books [index]) .then (function (sisaWaktu) {
        console.log(sisaWaktu)
        if(sisaWaktu > 0) {
            if (index + 1 < books.length) {
                
                return membaca(sisaWaktu, index + 1)
            }
        }
    })
    .catch(function (sisaWaktu){
        console.log(sisaWaktu)
    })  
        }
    
    membaca(10000,0) 