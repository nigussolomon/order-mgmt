import { Column, Reviews } from "@/components/ui/table/table";
import { dateFormatter } from "@/lib/formatters";
import Details from "./details";

interface RowData {
  reference: string;
  customerName: string;
  customerContact: string;
  requestDate: string;
  expectedDate: string;
  action?: void;
  status: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    accessor: "reference",
    label: "Quotation Reference",
  },
  {
    accessor: "customerName",
    label: "Customer Name",
  },
  {
    accessor: "customerContact",
    label: "Customer Contact",
  },
  {
    accessor: "requestDate",
    label: "Request Date",
    render: (row) => dateFormatter(row.requestDate),
  },
  {
    accessor: "expectedDate",
    label: "Expected Date",
    render: (row) => dateFormatter(row.expectedDate),
  },
  {
    accessor: "status",
    label: "Status",
  },
  {
    accessor: "action",
    label: "",
    render: (value) => <Details />,
  },
];

export const rows: RowData[] = [
  {
    reference: "ABC123",
    customerName: "John Doe",
    customerContact: "X4e2l@example.com",
    requestDate: "2023-01-01",
    expectedDate: "2023-01-15",
    status: "Open",
    reviews: { positive: 123, negative: 45 },
  },
];
