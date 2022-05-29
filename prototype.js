//PROTOTYPE = merupakan sebuah parameter yang dibuat otomatis oleh javascript saat memakai Constructor Function
// function Manusia(namaManusia, energiManusia) {
//   //   let this = Object.create(prototype); //otomatis dibuatkan oleh javascript
//   this.manusia = namaManusia;
//   this.energi = energiManusia;
//   //return this; // otomatis dibuatkan oleh javascript
// }

// Manusia.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   console.log(`Selamat makan ${this.manusia}, anda makan ${porsi} porsi.`);
// };
// Manusia.prototype.main = function (jam) {
//   this.energi -= jam;
//   console.log(
//     `Selamat bermain ${this.manusia}, anda akan bermain selama ${jam} jam`
//   );
// };

// rasidi = new Manusia("Rasidi", 1);

// class Manusia {
//   constructor(namaManusia, energiManusia) {
//     this.manusia = namaManusia;
//     this.energi = energiManusia;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     console.log(`Selamat makan ${this.manusia}, anda makan ${porsi} porsi.`);
//   }
//   main(jam) {
//     this.energi -= jam;
//     console.log(
//       `Selamat bermain ${this.manusia}, anda akan bermain selama ${jam} jam`
//     );
//   }
//   tidur(jam) {
//     this.energi += jam * 2;
//     console.log(
//       `Selamat tidur ${this.manusia}, energi anda akan bertambah ${jam} kali lipat`
//     );
//   }
// }

// let rasidi = new Manusia("Rasidi", 1);

let angka = [1, 3, 2];
console.log(angka);

const nama = "Rasidi";
console.log(nama);
