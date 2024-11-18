import ProductsLayout from "../_layout";
import { columns, rows } from "@/lib/orders/sales-order/tableProps";
import CustomTable from "@/components/ui/table/table";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Divider, Button, Drawer, Group } from "@mantine/core";
import { IconMist } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import New from "./_new";
export default function ProductDetailsPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <ProductsLayout
      title={"SALES ORDERS"}
      action={
        <Button
          onClick={open}
          color="black"
          leftSection={<IconMist size={16} />}
          size="xs"
        >
          NEW SALES ORDER
        </Button>
      }
    >
      <Group grow>
        <CustomTextInput
          label="Search Sales Order"
          placeholder="Place your search here"
          value=""
          onChange={() => {}}
        />
        <CustomSelect
          data={[]}
          label="Order Manager"
          placeholder="Select an order manager"
          value=""
          onChange={() => {}}
        />
        <CustomSelect
          data={[]}
          label="Customer"
          placeholder="Select a customer"
          value=""
          onChange={() => {}}
        />
        <CustomSelect
          data={[]}
          label="Status"
          placeholder="Select a status"
          value=""
          onChange={() => {}}
        />
      </Group>
      <Divider my="md" />
      <Drawer size="xl" opened={opened} onClose={close} title="New Sales Order">
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
