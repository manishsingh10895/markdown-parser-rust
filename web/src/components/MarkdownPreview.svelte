<script lang="ts">
    import { preview } from "../lib/stores.js";

    let previewValue;
    let el;
    preview.subscribe((value) => {
        previewValue = value;
        // el.innerHTML = previewValue;
        if (el) {
            el.innerHTML = previewValue;
        }
        console.log("[PREVIEW]", value);
        console.log(el);
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
    }
</style>
