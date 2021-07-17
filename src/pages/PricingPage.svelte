<script lang="ts">
  import { store } from "../stores/TablesStore";
  import Header from "../components/Header.svelte";
  import Table from "../components/Table.svelte";
  import TableButton from "../components/TableButton.svelte";
  import TableHeader from "../components/TableHeader.svelte";
  import TableItem from "../components/TableItem.svelte";
  import TableItems from "../components/TableItems.svelte";
  import TablePrice from "../components/TablePrice.svelte";
  import TableSection from "../components/TableSection.svelte";
  import TableWrap from "../components/TableWrap.svelte";
  import Spinner from "../components/Spinner.svelte";
</script>

{#if $store.loading}
  <Spinner/>
{:else}
  <div>
    <Header title="Pricing Tables" subtitle="My services" />
    <TableSection>
      <TableWrap>
        {#each $store.tables as table}
          <Table>
            <TableHeader 
              title={table.title} 
              color={table.color} />
            <TableItems>
              {#each table.items as item}
                <TableItem text={item.text} />
              {/each}
            </TableItems>
            <TablePrice price={table.price} />
            <TableButton
              href={table.url}
              caption={"Purcharse"}
              color={table.color}
            />
          </Table>
        {/each}
      </TableWrap>
    </TableSection>
  </div>
{/if}



