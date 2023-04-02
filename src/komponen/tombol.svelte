<script>
  export let teks;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function jika_diklik() {
    dispatch("klik");
  }
</script>

<button on:click={jika_diklik} class="rounded text-white bg-black px-5 py-2"
  >{teks}</button
>
