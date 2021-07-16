<script lang="ts">
  import Header from "../components/Header.svelte";
  import Table from "../components/Table.svelte";
  import TableButton from "../components/TableButton.svelte";
  import TableHeader from "../components/TableHeader.svelte";
  import TableItem from "../components/TableItem.svelte";
  import TableItems from "../components/TableItems.svelte";
  import TablePrice from "../components/TablePrice.svelte";
  import TableSection from "../components/TableSection.svelte";
  import TableWrap from "../components/TableWrap.svelte";
</script>

<div>
  <Header title="Pricing Tables" subtitle="My services" />
  <TableSection>
    <TableWrap>
      <Table>
        <TableHeader title="Basic" color="basic" />
        <TableItems>
          <TableItem text="50 Emails" />
          <TableItem text="5GB Disk Space" />
          <TableItem text="5GB Bandwidth" />
          <TableItem text="Unlimited Domains" />
        </TableItems>
        <TablePrice price={140} />
        <TableButton 
          href={"#"} 
          caption={"Purcharse"} 
          color={"basic"} 
        />
      </Table>
      <Table>
        <TableHeader title="Enterprise" color="enterprise" />
        <TableItems>
          <TableItem text="50 Emails" />
          <TableItem text="7GB Disk Space" />
          <TableItem text="5GB Bandwidth" />
          <TableItem text="Unlimited Domains" />
        </TableItems>
        <TablePrice price={200} />
        <TableButton 
          href={"#"} 
          caption={"Purcharse"} 
          color={"enterprise"} 
        />
      </Table>
      <Table>
        <TableHeader title="Standard" color="standard" />
        <TableItems>
          <TableItem text="100 Emails" />
          <TableItem text="10GB Disk Space" />
          <TableItem text="6GB Bandwidth" />
          <TableItem text="Unlimited Domains" />
        </TableItems>
        <TablePrice price={400} />
        <TableButton 
          href={"#"} 
          caption={"Purcharse"} 
          color={"standard"} />
      </Table>
    </TableWrap>
  </TableSection>
</div>
