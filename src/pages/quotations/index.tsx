import ProductsLayout from "./_layout";
import { columns, rows } from "@/lib/quotations/tableProps";
import CustomTable from "@/components/ui/table/table";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import CustomDateInput from "@/components/ui/inputs/dateInput/dateInput";
import { Divider, Group, Button, Drawer } from "@mantine/core";
import { IconListCheck } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import New from "./_new";

export default function ProductDetailsPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <ProductsLayout
      title="QUOTATIONS"
      action={
        <Button
          onClick={open}
          color="black"
          leftSection={<IconListCheck size={16} />}
          size="xs"
        >
          NEW QUOTATION
        </Button>
      }
    >
      <Group grow gap="md">
        <CustomTextInput
          label="Search Quotation"
          placeholder="Place your search here"
          value=""
          onChange={() => {}}
        />
        <CustomSelect
          label="Status"
          placeholder="Select a status"
          value=""
          onChange={() => {}}
          data={[]}
        />
        <CustomDateInput
          label="Request Date"
          placeholder="Enter a request date"
          onChange={() => {}}
        />
        <CustomDateInput
          label="Expected Date"
          placeholder="Enter a expected date"
          onChange={() => {}}
        />
      </Group>
      <Divider my="md" />
      <Drawer size="xl" opened={opened} onClose={close} title="NEW QUOTATION">
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
