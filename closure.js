//CLOSURE ADALAH SEBUAH FUNCTION YANG DIDALAMNYA MEMPUNYAI NILAI VARIABEL YANG BERADA DI PARENT FUNCTION

//parent function
// function init() {
//local variable
//   let nama = "Rasidi";
//inner function (CLOSURE)
//   return function (nama) {
//akses ke variable parent function
//     console.log(nama);
//   };
//panggil function tampilNama
//   console.dir(tampilNama);
// }
//panggil function init
// let a = init();
// a("Rasidi");

// FACTORY FUNCTION
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// ucapkanSalam("Pagi")("Rasidi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");
// selamatSiang("Ahmad");

// let add = function () {
//   let result = 0;
//   return function () {
//     return ++result;
//   };
// };
//menjalankan parent function add();
// console.log(add());
//buat variable untuk menjalankan inner function yang ada di parent function
// let a = add();
// console.log(a());
// console.log(a());

//cara untuk bisa menjalankan inner function tanpa ditampung ke variable
//tambah ( ) diawal dan diakhir pembuatan function, juga tambahkan () diakhir untuk menjalankan function nya
let tambah = (function () {
  let result = 0;
  return function () {
    return ++result;
  };
})();
console.log(tambah());
console.log(tambah());
console.log(tambah());
