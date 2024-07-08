"use client";
import { columns, packages } from "@/libs/data";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import Link from "next/link";
import { useCallback } from "react";

export const TourPackageTable = ({ location }) => {
  const renderCell = useCallback((packageList, columnKey) => {
    const cellValue = packageList[columnKey];

    switch (columnKey) {
      case "tour_packages":
        return (
          <p className="text-base font-Gilroy text-secondary">
            {packageList.tourPackages}
          </p>
        );
      case "duration":
        return (
          <p className="text-base font-Gilroy text-secondary">
            {packageList.duration}
          </p>
        );
      case "price":
        return (
          <div className="text-base font-Gilroy text-secondary">
            {packageList.price}
          </div>
        );
      case "inclusions":
        return (
          <div className="text-base font-Gilroy text-secondary">
            {packageList.inclusions}
          </div>
        );
      case "details":
        return (
          <Link
            href={"/sample.pdf"}
            download={"sample_file.pdf"}
            type="file"
            target="_blank"
            className="text-base capitalize text-success hover:text-secondary font-Gilroy"
          >
            View Details
          </Link>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <section className="w-full h-auto px-[24px] py-7 max-w-[1200px] mx-auto">
      <Table
        color="secondary"
        isStriped
        aria-label={`${location} Tour Packages`}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              className="text-lg text-secondary font-Gilroy"
              //   align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={packages}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
};
