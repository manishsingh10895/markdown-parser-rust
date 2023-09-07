<script lang="ts">
  import { fly } from "svelte/transition";
  import Header from "./components/Header.svelte";
  import MarkdownInput from "./components/MarkdownInput.svelte";
  import MarkdownPreview from "./components/MarkdownPreview.svelte";
  import { markdown, preview } from "./lib/stores";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import IoCheckmarkDoneCircleSharp from "svelte-icons-pack/io/IoCheckmarkDoneCircleSharp";
  import { onMount } from "svelte";
  import * as init from "../../pkg/markdown_parser";

  let rust: typeof init;

  async function loadRust() {
    rust = init;
  }

  onMount(() => {
    loadRust();

    window.addEventListener("keydown", handleKeydown);

    markdown.subscribe((value) => {
      console.log(value);
      if (value && value.length > 10) {
        showButton = true;
      } else {
        showButton = false;
      }

      markdownValue = value;

      renderMarkdown();
    });
  });

  let showButton = false;
  let markdownValue = "";

  function handleKeydown(e: KeyboardEvent) {
    console.log(e);
    if (e.ctrlKey && e.keyCode == 13) {
      console.log("Markdown");
      renderMarkdown();
    }
  }

  function renderMarkdown() {
    let parsed = rust.parse(markdownValue);
    preview.set(parsed);
  }
</script>

<main>
  <Header />
  <div class="input-container">
    <div style="height: 100%; margin-right: 15px">
      <MarkdownInput />
    </div>
    <div style="flex:1; min-width: 250px; height: 100%">
      <MarkdownPreview />
    </div>
  </div>
  {#if showButton}
    <div
      on:click={renderMarkdown}
      transition:fly={{ y: -50, x: -50 }}
      class="preview-button"
    >
      <Icon size="40" color="white" src={IoCheckmarkDoneCircleSharp} />
    </div>
  {/if}
</main>

<style>
  .input-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 80vh;
  }

  .preview-button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    place-items: center;
    border-radius: 25%;
    bottom: 10px;
    right: 10px;
    height: 55px;
    width: 55px;
    background: red;
  }
</style>

