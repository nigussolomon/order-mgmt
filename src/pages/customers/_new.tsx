import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Group, Button } from "@mantine/core";

export default function New() {
  return (
    <div>
      <Group gap="md">
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Business Name" placeholder="Business Name" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomSelect data={[]} label="Business Type" placeholder="Business Type" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Business Contact" placeholder="Business Contact" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Business Address" placeholder="Business Address" />
        </Group>
        <Button fullWidth color="dark" size="sm">
          Submit
        </Button>
      </Group>
    </div>
  );
}
