import data_surat from "../data/data-surat";

export default function (nomor_halaman) {
  let list = nomor_halaman.split("\n").filter((y) => y);
  let listHasil = [];
  for (let x of list) {
    listHasil = [...listHasil, data_surat[x - 1]];
  }
  //   @ts-ignore
  listHasil = listHasil.join("\n");
  let surat;
  surat = listHasil;
  return surat;
}
