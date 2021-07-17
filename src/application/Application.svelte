<script lang="ts">
  import { onMount } from "svelte";
  import PricingPage from "../pages/PricingPage.svelte";
  import { TablesService } from "../services/TablesService";
  import { store } from "../stores/TablesStore";

  onMount(async () => {
    store.loading();
    TablesService.getTables().then((response) => {
      store.success(response);
    });
  });
</script>

<PricingPage />
