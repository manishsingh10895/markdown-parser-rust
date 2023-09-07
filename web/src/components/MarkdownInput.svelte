<script lang="ts">
  import { markdown } from "../lib/stores";
  let markdownValue = "";

  $: {
    markdown.set(markdownValue);
  }

  let timer;

  const debounce = (v) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      markdown.set(v);
    }, 100);
  };

  const handleInput = (e: KeyboardEvent) => {
    console.log(e.target.value);
    console.log(markdownValue);
    debounce((e.target as HTMLInputElement).value);
  };
</script>

<div style="height: 100%">
  <textarea 
  style:padding="20px"
    class="markdown-input" rows="30" cols="50" on:keyup={handleInput} />
</div>

<style>
  .markdown-input {
    font-size: 20px;
    height: 100%;
  }
</style>
