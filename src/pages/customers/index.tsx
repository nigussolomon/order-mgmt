import ProductsLayout from "./_layout";
import { columns, rows } from "@/lib/customer/tableProps";
import CustomTable from "@/components/ui/table/table";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Divider, Group, Button, Drawer } from "@mantine/core";
import { IconUsers } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import New from "./_new";

export default function ProductDetailsPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <ProductsLayout
      title="CUSTOMERS"
      action={
        <Button
          onClick={open}
          color="black"
          leftSection={<IconUsers size={16} />}
          size="xs"
        >
          NEW CUSTOMER
        </Button>
      }
    >
      <Group grow gap="md">
        <CustomTextInput
          label="Search Customer"
          placeholder="Place your search here"
          value=""
          onChange={() => {}}
        />
        <CustomSelect
          label="Product Code"
          placeholder="Select a product"
          value=""
          onChange={() => {}}
          data={[]}
        />
        <CustomSelect
          label="Warehouse"
          placeholder="Select a warehouse"
          value=""
          onChange={() => {}}
          data={[]}
        />
      </Group>
      <Divider my="md" />
      <Drawer size="lg" opened={opened} onClose={close} title="New Customer">
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
