import CustomSelect from "@/components/ui/inputs/select/select";
import CustomDateInput from "@/components/ui/inputs/dateInput/dateInput";
import { columns, rows } from "@/lib/orders/purchase-order/newTableProps";
import CustomTable from "@/components/ui/table/table";

import { Group, Button, Divider } from "@mantine/core";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";

export default function New() {
  return (
    <div>
      <Group gap="md">
        <Group gap="md" grow style={{ width: "100%" }}>
          <CustomSelect data={[]} label="Supplier" placeholder="Supplier" />
          <CustomSelect
            data={[]}
            label="Order Manager"
            placeholder="Order Manager"
          />
        </Group>
        <Group gap="md" grow style={{ width: "100%" }}>
          <CustomDateInput label="Order Date" placeholder="Order Date" />
          <CustomDateInput label="Expected Date" placeholder="Expected Date" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <Divider variant="dashed" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomSelect data={[]} label="Product" placeholder="Product" />
          <CustomTextInput label="Quantity" placeholder="Quantity" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <Divider variant="dashed" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTable pagingOff columns={columns} rows={rows} />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <Divider variant="dashed" />
        </Group>
        <Button fullWidth color="dark" size="sm">
          Submit
        </Button>
      </Group>
    </div>
  );
}
