import { Column, Reviews } from "@/components/ui/table/table";
import { currencyFormatter } from "@/lib/formatters";

interface RowData {
  code: string;
  name: string;
  description: string;
  quantity: number;
  status: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    accessor: "code",
    label: "Code",
  },
  {
    accessor: "name",
    label: "Name",
  },
  {
    accessor: "description",
    label: "Description",
  },
  {
    accessor: "quantity",
    label: "Quantity",
  },
  {
    accessor: "status",
    label: "Status",
  },
];

export const rows: RowData[] = [
  {
    code: "ABC123",
    name: "Product A",
    description: "Description of Product A",
    quantity: 10,
    status: "Open",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Product B",
    description: "Description of Product B",
    quantity: 5,
    status: "Closed",
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "GHI789",
    name: "Product C",
    description: "Description of Product C",
    quantity: 3,
    status: "Open",
    reviews: { positive: 789, negative: 90 },
  },
];
