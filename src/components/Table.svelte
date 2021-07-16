<div>
  <slot />
</div>

<style>
  div {
    text-align: center;
    margin: 20px;
    box-shadow: 1px 0 10px 15px rgba(0, 0, 0, 0.1);
    transition: transform 1.6s;
  }
  div:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 657px) {
    div {
      flex: 100%;
      max-width: 100%;
      margin-bottom: 15px;
    }
  }
</style>
