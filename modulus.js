import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan angka pertama: ", (a) => {
  rl.question("Masukkan angka kedua: ", (b) => {
    const hasil = Number(a) % Number(b);
    console.log(`Hasil modulus dari ${a} % ${b} = ${hasil}`);
    rl.close();
  });
});
