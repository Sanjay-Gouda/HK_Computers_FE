"use client";

import * as React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";

export type Column<T> = {
  header: string;
  key?: keyof T;
  render?: (value: T[keyof T] | undefined, row: T) => React.ReactNode;
};

type ReportTableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

export default function ReportTable<T>({ columns, data }: ReportTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns &&
              columns.length > 0 &&
              columns.map((column, index) => (
                <TableHead key={index}>{column.header}</TableHead>
              ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Example row, replace with dynamic data as needed */}
          {data.map((data, index) => (
            <TableRow key={index}>
              {columns.map((column) => {
                const value = column.key ? data[column.key] : undefined;
                const columnKey = column.key ? String(column.key) : column.header;
                return (
                  <TableCell key={columnKey}>
                    {column.render ? column.render(value, data) : String(value)}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
