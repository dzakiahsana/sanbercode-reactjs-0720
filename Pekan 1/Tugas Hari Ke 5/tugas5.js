// SOAL 1 -->
//Tulislah sebuah function dengan nama halo() yang mengembalikan nilai “Halo Sanbers!” 
//yang kemudian dapat ditampilkan di console.
//JAWABAN:
console.log("SOAL 1")

function halo() {
    return "Halo Sanbers!"
  }
  var hallo = halo();
  console.log(hallo)

//SOAL 2 -->
//Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian dua parameter yang di kirim.
//JAWABAN:
console.log("SOAL 2")

function kalikan(angkaPertama, angkaKedua) {
    return angkaPertama * angkaKedua
  }
   
  console.log(kalikan(12, 4))

//SOAL 3 -->
//Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan 
//seperti berikut: “Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!”
//JAWABAN:
console.log("SOAL 3")

introduce = (name, age, address, hobby) => {
  let namaSaya = name;
      alamatSaya = address;
      tanggalLahirSaya = new Date(age);
  const hobiSaya = hobby;
  return {
    nama: () => namaSaya,
    alamat: () => alamatSaya,
    hobi: () => hobiSaya,
    usia: () =>
      (new Date()).getFullYear() - tanggalLahirSaya.getFullYear() 
  }
}
const john = introduce('John,', '1990-10-21','Jalan belum jadi,','Gaming');
console.log("Nama saya",john.nama(),"umur saya",john.usia(),"tahun,","alamat saya di",john.alamat()
,"dan saya punya hobby yaitu",john.hobi(),"!"); 
