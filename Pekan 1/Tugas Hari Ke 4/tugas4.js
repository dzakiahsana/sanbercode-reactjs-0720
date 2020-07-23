// Soal 1 -->
//Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
//Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
//menghitung mundur. Jangan lupa tampilkan di console juga judul ‘LOOPING PERTAMA’ dan ‘LOOPING KEDUA’.”
//JAWABAN:
console.log('SOAL NOMOR 1');

var sayLooping = "LOOPING PERTAMA"
console.log(sayLooping)

var i = 1;
while(i < 21) {
    if (i % 2 == 0)
    console.log(i + ' - I love coding ');
    i++;
}

var sayLooping = "LOOPING KEDUA"
console.log(sayLooping)

var i = 20;
while(i > 0) {
    if (i % 2 == 0)
    console.log(i + ' - I will become a frontend developer ');
    i--;
}

// Soal 2 -->
//Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
//Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk memenuhi syarat tertentu yaitu:

//SYARAT:
//A. Jika angka ganjil maka tampilkan Santai
//B. Jika angka genap maka tampilkan Berkualitas
//C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding.
//JAWABAN:
console.log('SOAL NOMOR 2');

var n = 20;
var x;

for (x=1; x<=n ;x++){
    if (x%3 === 0 && x%2 === 1){
        console.log(x+ ' - I Love Coding');
    }
    else if (x%2 === 0){
        console.log(x+ ' - Berkualitas');
    }
    else if (x%2 === 1){
        console.log(x+ ' - Santai');
    }
}


// Soal 3  -->
//Kali ini kamu diminta untuk menampilkan sebuah segitiga dengan tanda pagar (#) dengan dimensi tinggi 7 dan alas 7. 
//Looping boleh menggunakan syntax apa pun (while, for, do while).
//JAWABAN:
console.log('SOAL NOMOR 3');

var a = '';
for (var i = 0; i < 8; i++) {
    for (var j = 1; j<=i ; j++) {
        a+= "#";
    }
    a += "\n";
}  
console.log(a);

// Soal 4 -->
//buatlah variabel seperti di bawah ini
//var kalimat="saya sangat senang belajar javascript"
//ubah kalimat diatas menjadi array dengan output seperti di bawah ini
//["saya", "sangat", "senang", "belajar", "javascript"]
//JAWABAN:
console.log('SOAL NOMOR 4');

var kalimat = "saya:sangat:senang:belajar:javascript" 
var name = kalimat.split(":")
console.log(name) 

// Soal 5 -->
//buatlah variabel seperti di bawah ini
//var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
//urutkan array di atas dan tampilkan data seperti output di bawah ini:
//1. Mangga
//2. Apel
//3. Anggur
//4. Semangka
//5. Jeruk
//JAWABAN:
console.log('SOAL NOMOR 5');

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
for (var i = 0 ; i <= 4; i++){
    daftarBuah.sort()   
    console.log(daftarBuah[i])
}




