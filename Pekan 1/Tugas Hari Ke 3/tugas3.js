// Soal 1 -->
//var kataPertama = "saya";
//var kataKedua = "senang";
//var kataKetiga = "belajar";
//var kataKeempat = "javascript";
//gabungkan variabel-variabel tersebut agar menghasilkan output
//saya Senang belajar JAVASCRIPT
//JAWABAN:
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "JAVASCRIPT";
console.log(kataPertama, kataKedua, kataKetiga, kataKeempat)

// Soal 2 -->
//var kataPertama = "1";
//var kataKedua = "2";
//var kataKetiga = "4";
//var kataKeempat = "5";
//ubah lah variabel diatas ke dalam integer dan lakukan jumlahkan semua variabel dan tampilkan dalam output
//JAWABAN:
var kataPertama = 1;
var kataKedua = 2;
var kataKetiga = 4;
var kataKeempat = 5;

var penjumlahan = kataPertama + kataKedua + kataKetiga + kataKeempat;
console.log(penjumlahan)


// Soal 3 -->
//var kalimat = 'wah javascript itu keren sekali'; 

//var kataPertama = kalimat.substring(0, 3); 
//var kataKedua; // do your own! 
//var kataKetiga; // do your own! 
//var kataKeempat; // do your own! 
//var kataKelima; // do your own! 

//console.log('Kata Pertama: ' + kataPertama); 
//console.log('Kata Kedua: ' + kataKedua); 
//console.log('Kata Ketiga: ' + kataKetiga); 
//console.log('Kata Keempat: ' + kataKeempat); 
//console.log('Kata Kelima: ' + kataKelima);
//selesaikan variabel yang belum diisi dan hasilkan output seperti berikut:

//Kata Pertama: wah
//Kata Kedua: javascript
//Kata Ketiga: itu
//Kata Keempat: keren
//Kata Kelima: sekali
//JAWABAN:
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua= kalimat.substring(3, 14);
var kataKetiga= kalimat.substring(14, 18); 
var kataKeempat= kalimat.substring(18, 24); 
var kataKelima= kalimat.substring(24, 31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// Soal 4 -->
//var nilai;
//isi variabel tersebut dengan angka dari 0 sampai 100. lalu buat lah pengkondisian dengan if-elseif dengan kondisi

//nilai > 80 indeksnya A
//nilai > 70 dan nilai < 80 indeksnya B
//nilai > 60 dan nilai < 70 indeksnya c
//nilai > 50 dan nilai < 60 indeksnya D
//nilai < 50 indeksnya E
//JAWABAN:
var nilai = 75
if ( nilai >= 80 ) {
    console.log("A")
} else if ( nilai >= 70 ) {
    console.log("B")
} else if ( nilai <= 80 ) {
    console.log("B")
} else if ( nilai >= 60 ) {
    console.log("C")
} else if ( nilai <= 70 ) {
    console.log("C")
} else if ( nilai >= 50 ) {
    console.log("D")
} else if ( nilai <= 60 ) {
    console.log("D")
} else if ( nilai <= 50 ) {
    console.log("E")
}

// Soal 5 -->
//var tanggal = 22;
//var bulan = 7;
//var tahun = 2020;
//ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir anda dan buatlah switch case pada bulan, lalu muncul kan string nya dengan output seperti ini 22 Juli 2020 (isi di sesuaikan dengan tanggal lahir masing-masing)
//JAWABAN:
var tanggal = 02;
var bulan = 10;
var tahun = 1998;
switch(bulan) {
  case 10:   { console.log('02 Oktober 1998'); break; }
  case 1:   { console.log('Belum Lahir'); break; }
  case 2:   { console.log('Akan Lahir'); break; }
  case 3:   { console.log('Sudah Lahir'); break; }
  case 4:   { console.log('Balita'); break; }
  case 5:   { console.log('Anak-anak'); break; }
  case 6:   { console.log('Remaja'); break; }
  case 7:   { console.log('Dewasa'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }}