<script lang="ts">
  export let price: number;
</script>

<h4 class="price">
  <small>$</small>
  {price}
</h4>

<style>
  .price {
    font-family: Rubik;
    font-size: 46px;
  }
  small {
    font-family: Rubik;
    font-size: 26px;
    margin-right: -12px;
  }
</style>
