<script>
  import Putih from "../komponen/putih.svelte";
  import Judul from "../komponen/judul.svelte";
</script>

<div class="w-full min-h-screen bg-green-200 p-5 grid grid-cols-3 gap-5">
  <div>
    <Judul>Quran Page Number</Judul>
    <textarea
      name=""
      class="form-control w-full h-120 p-2 focus:outline-none"
      id=""
      cols="30"
      rows="10"
    />
  </div>
  <div>
    <Judul>Juz</Judul>
    <Putih />
  </div>
  <div>
    <Judul>Surat</Judul>
    <Putih />
  </div>
</div>
