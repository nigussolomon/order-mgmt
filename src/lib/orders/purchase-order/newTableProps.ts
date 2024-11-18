import { Column, Reviews } from "@/components/ui/table/table";
import { currencyFormatter } from "@/lib/formatters";

interface RowData {
  code: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  totalPrice: number;
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
    accessor: "price",
    label: "Price",
    render: (value) => currencyFormatter(value.price),
  },
  {
    accessor: "totalPrice",
    label: "Total Price",
    render: (value) => currencyFormatter(value.totalPrice),
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
    price: 19.99,
    totalPrice: 199.9,
    status: "Open",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Product B",
    description: "Description of Product B",
    quantity: 5,
    price: 29.99,
    totalPrice: 149.95,
    status: "Closed",
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "GHI789",
    name: "Product C",
    description: "Description of Product C",
    quantity: 3,
    price: 39.99,
    totalPrice: 119.97,
    status: "Open",
    reviews: { positive: 789, negative: 90 },
  },
];
