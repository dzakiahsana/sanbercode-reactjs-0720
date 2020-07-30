// <--- SOAL 1 --->
// JAWABAN
console.log('<--- SOAL 1 --->')

let luasLingkaran = function(phi,r)
{
  return phi*r*r;
};
console.log('Luas Lingkaran =',luasLingkaran(3.14,4));

const kelilingLingkaran = function(phi,r){
  return 2*phi*r;
}
console.log("Keliling Lingkaran =",kelilingLingkaran(3.14,4))

// <--- SOAL 2 --->
// JAWABAN
console.log('<--- SOAL 2 --->')
let kalimat= ""
let gabung = function(kata1, kata2, kata3, kata4, kata5) { 
    const kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}` 
    return kalimat  
}
     
console.log(gabung("saya","adalah","seorang","frontend","developer"))

// <--- SOAL 3 --->
// JAWABAN
console.log('<--- SOAL 3 --->')
class Book {
    constructor(AutumnInParis) {
      this.name = AutumnInParis;
      this.totalPage = 250;
      this.price = 75000;
    }
  } 

  class Komik extends Book {
    constructor(TokyoGhoul) {
      super(TokyoGhoul)
      this.totalPage = 50;
      this.price = 50000;
      this.isColorful  = true;
     
    }
  }
  var buku = new Book("Autumn In Paris");
  console.log(buku);

  var komik = new Komik("Tokyo Ghoul");
  console.log(komik);
