<script lang="ts">
  import { onMount } from "svelte";
  import { preview } from "../lib/stores";

  let previewValue;
  let el;

  onMount(() => {
    preview.subscribe((value) => {
      previewValue = value;
      // el.innerHTML = previewValue;
      if (el) {
        el.innerHTML = previewValue;
      }
      console.log("[PREVIEW]", value);
      console.log(el);
    });
  });
</script>

<div bind:this={el} id="preview-container" />

<style>
  #preview-container {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    background: #78909c;
    color: white;
    padding: 10px 15px;
    font-size: 1.4rem;
  }
</style>
