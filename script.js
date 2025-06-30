
let sonlar = [2, 4, 9, 10, 45, 67, 8, 90];
let juftSonlar = [];

for (let i = 0; i < sonlar.length; i++) {
  if (sonlar[i] % 2 === 0) {
    juftSonlar.push(sonlar[i]);
  }
}

console.log( juftSonlar, "Juft sonlar");
