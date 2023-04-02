export default function (nomor_halaman) {
  let listDatang = nomor_halaman.split("\n").filter((x) => x);
  let listHasil = [];
  for (let x of listDatang) {
    let juznya = 0;
    if (x == 1) {
      juznya = 1;
    } else if (x < 602) {
      // @ts-ignore
      let nilai = (x - 1) / 20;
      nilai = Math.ceil(nilai);
      juznya = nilai;
    } else if (x <= 604) {
      juznya = 30;
    } else {
      // @ts-ignore
      juznya = "";
    }
    listHasil = [...listHasil, juznya];
  }
  let juz;
  juz = listHasil.join("\n");
  return juz;
}
