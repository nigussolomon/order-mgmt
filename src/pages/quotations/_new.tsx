import CustomSelect from "@/components/ui/inputs/select/select";
import CustomDateInput from "@/components/ui/inputs/dateInput/dateInput";
import { columns, rows } from "@/lib/quotations/newTableProps";
import CustomTable from "@/components/ui/table/table";

import { Group, Button, Divider } from "@mantine/core";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";

export default function New() {
  return (
    <div>
      <Group gap="md">
        <Group gap="md" grow style={{ width: "100%" }}>
          <CustomTextInput label="Customer Name" placeholder="Customer Name" />
          <CustomTextInput
            label="Customer Contact"
            placeholder="Customer Contact"
          />
        </Group>

        <Group grow style={{ width: "100%" }}>
          <CustomDateInput
            label="Requested Date"
            placeholder="Requested Date"
          />
          <CustomDateInput label="Expected Date" placeholder="Expected Date" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <Divider variant="dashed" />
        </Group>
        <Group gap="md" grow style={{ width: "100%" }}>
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
