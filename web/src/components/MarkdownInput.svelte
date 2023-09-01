<script lang="ts">
    import { markdown } from "../lib/stores";
    let markdownValue = "";

    $: {
        markdown.set(markdownValue);
    }
</script>

<div style="height: 100%">
    <textarea
        class="markdown-input"
        rows="30"
        cols="50"
        bind:value={markdownValue}
    />
</div>

<style>
    .markdown-input {
        font-size: 20px;
        height: 100%;
    }
</style>
