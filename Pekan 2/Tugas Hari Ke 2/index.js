// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
   
   
]
 
function membaca(waktu,index) {
readBooks(waktu, books [index], function (timeSpent) {
    console.log(timeSpent)
    if(timeSpent > 0) {
        if (index + 1 < books.length) {
            
            return membaca(timeSpent, index + 1)
        }
        }
        
        else {
            console.log("Semua buku selesai dibaca")
    }
});
}membaca(10000,0) 