<script>
  import Putih from "../komponen/putih.svelte";
  import Wa from "../komponen/wa.svelte";
  import Textarea from "../komponen/textarea.svelte";
  import Judul from "../komponen/judul.svelte";
  import Tombol from "../komponen/tombol.svelte";
  import olah_juz from "../fungsi/olah-juz";
  import olah_surat from "../fungsi/olah-surat";

  let nomor_halaman;
  let juz;
  let surat;

  function olah() {
    juz = olah_juz(nomor_halaman);
    surat = olah_surat(nomor_halaman);
  }

  function wa() {
    open("https://chat.whatsapp.com/Lq6TDKgJtXpJ3EsuyUSAcO", "_blank");
  }
</script>

<div class="w-full min-h-screen bg-green-200 p-5 grid grid-cols-3 gap-5">
  <div>
    <Judul>Quran Page Number</Judul>
    <div class="mb-3">
      <Textarea bind:isi={nomor_halaman} />
    </div>
    <Tombol on:klik={olah} teks="Olah" />
  </div>
  <div>
    <Judul>Juz</Judul>
    <Textarea is_readonly bind:isi={juz} />
  </div>
  <div>
    <Judul>Surat</Judul>
    <div class="mb-3">
      <Textarea is_readonly bind:isi={surat} />
    </div>
    <!-- <div class="flex justify-between">
      <div />
      <Tombol on:klik={wa} teks="Join Community" />
    </div> -->
  </div>
</div>

<Wa />
