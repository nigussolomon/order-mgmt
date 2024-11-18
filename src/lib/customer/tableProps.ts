import { Column, Reviews } from "@/components/ui/table/table";

interface RowData {
  businessName: string;
  businessType: string;
  businessContact: string;
  businessAddress: string;
  status: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    accessor: "businessName",
    label: "Business Name",
  },
  {
    accessor: "businessType",
    label: "Business Type",
  },
  {
    accessor: "businessContact",
    label: "Business Contact",
  },
  {
    accessor: "businessAddress",
    label: "Business Address",
  },
  {
    accessor: "status",
    label: "Status",
  },
];

export const rows: RowData[] = [
  {
    businessName: "ABC Company",
    businessType: "Manufacturer",
    businessContact: "X4e2l@example.com",
    businessAddress: "123 Main St, Anytown, USA",
    status: "Active",
    reviews: { positive: 123, negative: 45 },
  },
];
