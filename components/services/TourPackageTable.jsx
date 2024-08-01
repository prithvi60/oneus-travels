"use client";
import { leisureLists } from "@/libs/data";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { usePathname } from "next/navigation";
export const TourPackageTable = () => {
  const path = usePathname();
  const pathArray = path.split("/");
  const locationPath = pathArray[pathArray.length - 1];

  const lists = leisureLists.filter(
    (item) => item.location === locationPath.replace(/%20/g, " ")
  );

  return (
    <section className="w-full h-auto space-y-4 padding md:space-y-6">
      <h2 className="text-xl font-semibold tracking-normal text-center capitalize font-Gilroy text-secondary md:text-2xl xl:text-3xl">
        best selling {lists[0].location} Holiday Packages
      </h2>
      <div className="w-full mx-auto sm:max-w-xl lg:max-w-2xl">
        <Table
          color="secondary"
          isStriped
          aria-label={`${lists[0].location} Tour Packages`}
        >
          <TableHeader
            color="secondary"
            isStriped
            aria-label={`${lists[0].location} Tour Packages`}
          >
            <TableColumn className="text-base font-semibold sm:text-lg text-secondary font-Gilroy">
              Category
            </TableColumn>
            <TableColumn className="text-base font-semibold sm:text-lg text-secondary font-Gilroy">
              Details
            </TableColumn>
          </TableHeader>
          <TableBody>
            {lists[0].packages.map((list, idx) => (
              <TableRow key={idx}>
                <TableCell className="text-sm font-medium capitalize sm:text-base text-secondary font-Poppins">
                  {list.type}
                </TableCell>
                <TableCell className="text-sm font-normal sm:text-base text-secondary font-Poppins">
                  {list.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
