<script lang="ts">
  import type { Color } from "../domains/Color";
  export let caption: string;
  export let color: Color;
  export let href: string;
</script>

<a
  {href}
  class={color === "basic"
    ? "basic"
    : color === "enterprise"
    ? "enterprise"
    : "standard"}>{caption}</a
>

<style>
  .basic {
    font-family: Rubik;
    text-decoration: none;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 80%;
    padding: 15px;
    border-radius: 8px;
    background-color: #6ab04c;
    color: #fff;
  }
  .enterprise {
    font-family: Rubik;
    text-decoration: none;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 80%;
    padding: 15px;
    border-radius: 8px;
    background-color: #641e16;
    color: #fff;
  }
  .standard {
    font-family: Rubik;
    text-decoration: none;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 80%;
    padding: 15px;
    border-radius: 8px;
    background-color: #4a235a;
    color: #fff;
  }
</style>
