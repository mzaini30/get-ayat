<script>
  export let is_readonly = false;
  export let isi;
</script>

<textarea
  name=""
  class="form-control w-full h-120 p-2 focus:outline-none"
  id=""
  bind:value={isi}
  cols="30"
  rows="10"
  readonly={is_readonly}
  on:click={is_readonly ? this.select() : null}
/>
