//  <--- SOAL 1 --->
// JAWABAN
console.log('<--- SOAL 1 --->');
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var object = {
    nama : "Asep",
    jenisKelamin : "laki-laki",
    hobi : "baca buku",
    tahunLahir : 1992
}
console.log(object);

//  <--- SOAL 2 --->
// JAWABAN
console.log('<--- SOAL 2 --->');
 const items = [
     { nama: 'strawberry', warna: 'merah', adabijinya: 'tidak', harga: 9000 },
     { nama: 'jeruk', warna: 'oranye', adabijinya: 'ada', harga: 8000 },
     { nama: 'Semangka', warna: 'Hijau & Merah', adabijinya: 'ada', harga: 10000 },
     { nama: 'Pisang', warna: 'Kuning', adabijinya: 'tidak', harga: 5000 }
 ]
 const foundItem = items.find((item) => {
     return item.nama === 'strawberry'
 })
 console.log(foundItem)

//  <--- SOAL 3 --->
// JAWABAN
console.log('<--- SOAL 3 --->');
function dataFilm(nama, durasi, genre, tahun) {
    var film = {};
    film.nama = nama;
    film.durasi = durasi;
    film.genre = genre;
    film.tahun = tahun;
    return film;
}
var film = dataFilm('Stars Wars: Rise Of Skywalker', '2.5 jam', 'Action', 2019);
console.log(film);


//  <--- SOAL 4 --->
// JAWABAN
// Release 0
console.log("<--- SOAL 4 --->");
class Animal {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}
var sheep = new Animal("shaun");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);
console.log("");
// Release 1
class Ape extends Animal {
    constructor(name) {
        super(name)
        this.legs = 2;
    }
    yell() {
        return "Auooo";
    }
}
class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    jump() {
        return "hop hop";
    }
}
var sungokong = new Ape("kera sakti");
sungokong.yell()
console.log(sungokong);

var kodok = new Frog("buduk");
kodok.jump()
console.log(kodok);

//  <--- SOAL 5 --->
// JAWABAN
console.log("<--- SOAL 5 --->");
class Clock {
    constructor ({template}) {
          {
            var timer;
  
            function render() {
            var date = new Date();
        
            var hours = date.getHours();
            if (hours < 10) hours = '0' + hours;
        
            var mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;
        
            var secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;
        
            var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);
        
            console.log(output);
            }
        
            this.stop = function() {
            clearInterval(timer);
            };
        
            this.start = function() {
            render();
            timer = setInterval(render, 1000);
            };  
        
        }
    }
}
  var clock = new Clock({template: 'h:m:s'});
  clock.start(); 

