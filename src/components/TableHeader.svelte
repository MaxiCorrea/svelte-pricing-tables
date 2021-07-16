<script lang="ts">
  import type { Color } from "../domains/Color";
  export let title: string;
  export let color: Color;
</script>

<div
  class={color === "basic"
    ? "basic"
    : color === "enterprise"
    ? "enterprise"
    : "standard"}
>
  {title}
</div>

<style>
  .basic {
    font-family: Rubik;
    font-size: 30px;
    padding: 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #eb4d4b;
  }
  .enterprise {
    font-family: Rubik;
    font-size: 30px;
    padding: 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #f0932b;
  }
  .standard {
    font-family: Rubik;
    font-size: 30px;
    padding: 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #26b69a;
  }
</style>
