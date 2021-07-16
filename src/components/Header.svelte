<script lang="ts">
  export let title: string = "";
  export let subtitle: string = "";
</script>

<header>
  <h1>{title}</h1>
  <p>{subtitle}</p>
</header>

<style>
  header {
    text-align: center;
    padding: 25px;
  }
  h1 {
    font-family: Rubik;
    font-size: 40px;
    letter-spacing: 2px;
  }
  p {
    font-family: Rubik;
    font-size: 20px;
    letter-spacing: 2px;
    text-align: center;
  }
</style>
