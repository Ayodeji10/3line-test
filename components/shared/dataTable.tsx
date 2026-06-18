'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ErrorPlaceholder } from './error-placeholder';
import { NoDataPlaceholder } from './no-data-placeholder';
import Link from 'next/link';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';
import { Loader } from '../ui/loader';

type DataTableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  seeMoreUrl?: string;
  isLoading?: boolean;
  isError?: boolean;
  showCheckboxes?: boolean;
  groupSelect?: boolean;
  // Pagination props
  currentPage?: number;
  hasNext?: boolean;
  pageSize?: number;
  totalPages?: number;
  totalRecords?: number;
  onPageChange?: (page: number) => void;
};

export function DataTable<TData>({
  data,
  columns,
  seeMoreUrl,
  isLoading = false,
  isError = false,
  showCheckboxes = false,
  groupSelect = false,
  currentPage,
  hasNext,
  totalPages,
  totalRecords,
  onPageChange,
}: DataTableProps<TData>) {
  const showCheckboxColumn = showCheckboxes || groupSelect;
  const [sorting, setSorting] = useState<SortingState>([]);
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});
  const headerCheckboxRef = useRef<HTMLInputElement>(null);

  const table = useReactTable({
    data: data || [],
    columns,
    state: {
      sorting,
    },
    defaultColumn: {
      enableSorting: false,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const rowIds = useMemo(
    () => table.getRowModel().rows.map((row) => row.id),
    [table],
  );

  const selectedCount = Object.values(selectedRows).filter(Boolean).length;
  const allRowsSelected = rowIds.length > 0 && selectedCount === rowIds.length;
  const someRowsSelected = selectedCount > 0 && selectedCount < rowIds.length;

  useEffect(() => {
    if (headerCheckboxRef.current) {
      headerCheckboxRef.current.indeterminate = someRowsSelected;
    }
  }, [someRowsSelected]);

  useEffect(() => {
    setSelectedRows((prev) =>
      rowIds.reduce<Record<string, boolean>>((acc, id) => {
        if (prev[id]) acc[id] = true;
        return acc;
      }, {}),
    );
  }, [rowIds]);

  const toggleAllRows = (checked: boolean) => {
    setSelectedRows(
      checked
        ? rowIds.reduce<Record<string, boolean>>(
            (acc, id) => ({ ...acc, [id]: true }),
            {},
          )
        : {},
    );
  };

  const toggleRow = (rowId: string, checked: boolean) => {
    setSelectedRows((prev) => ({
      ...prev,
      [rowId]: checked,
    }));
  };

  let content;

  if (isLoading) {
    content = (
      <TableRow>
        <TableCell
          colSpan={columns.length + (showCheckboxColumn ? 1 : 0)}
          className="text-center py-12"
        >
          <div className="flex justify-center items-center">
            <Loader className="h-7 w-7" />
          </div>
        </TableCell>
      </TableRow>
    );
  } else if (isError) {
    content = (
      <TableRow>
        <TableCell
          colSpan={columns.length + (showCheckboxColumn ? 1 : 0)}
          className="text-center py-4"
        >
          <ErrorPlaceholder />
        </TableCell>
      </TableRow>
    );
  } else if (!data || data.length === 0) {
    content = (
      <TableRow>
        <TableCell
          colSpan={columns.length + (showCheckboxColumn ? 1 : 0)}
          className="text-center py-4"
        >
          <NoDataPlaceholder />
        </TableCell>
      </TableRow>
    );
  } else {
    content = table.getRowModel().rows.map((row) => (
      <TableRow key={row.id}>
        {showCheckboxColumn ? (
          <TableCell className="w-12 px-3">
            <input
              type="checkbox"
              checked={Boolean(selectedRows[row.id])}
              onChange={(event) => toggleRow(row.id, event.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 ring-offset-white focus:ring-blue-500"
              aria-label="Select row"
            />
          </TableCell>
        ) : null}
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    ));
  }

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup, headerGroupIndex) => (
              <TableRow key={headerGroup.id}>
                {showCheckboxColumn && headerGroupIndex === 0 ? (
                  <TableHead>
                    {groupSelect ? (
                      <input
                        ref={headerCheckboxRef}
                        type="checkbox"
                        checked={allRowsSelected}
                        onChange={(event) =>
                          toggleAllRows(event.target.checked)
                        }
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 ring-offset-white focus:ring-blue-500"
                        aria-label="Select all rows"
                      />
                    ) : null}
                  </TableHead>
                ) : showCheckboxColumn ? (
                  <TableHead />
                ) : null}
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : header.column.getCanSort() ? (
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 text-left text-sm font-medium text-slate-900 hover:text-slate-700"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {header.column.getIsSorted() === 'asc' ? (
                          <ArrowUp className="h-4 w-4 text-slate-500" />
                        ) : header.column.getIsSorted() === 'desc' ? (
                          <ArrowDown className="h-4 w-4 text-slate-500" />
                        ) : (
                          <ArrowDown className="h-4 w-4 text-slate-400" />
                        )}
                      </button>
                    ) : (
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>{content}</TableBody>
          {!isLoading && !isError && data && data.length > 0 && (
            <TableFooter>
              <TableRow>
                {seeMoreUrl ? (
                  <TableCell
                    colSpan={columns.length + (showCheckboxColumn ? 1 : 0)}
                    className="text-center py-3"
                  >
                    <Link
                      href={seeMoreUrl}
                      className="text-blue-600 hover:underline"
                    >
                      See more
                    </Link>
                  </TableCell>
                ) : (
                  currentPage !== undefined &&
                  onPageChange &&
                  totalPages !== undefined && (
                    <TableCell
                      colSpan={columns.length + (showCheckboxColumn ? 1 : 0)}
                      className="py-3"
                    >
                      <div className="flex items-center justify-center gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onPageChange(currentPage - 1)}
                          disabled={currentPage <= 0}
                          leftIcon={<ArrowLeft />}
                        >
                          Previous
                        </Button>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>
                            Page {currentPage + 1} of {totalPages}
                          </span>
                          {totalRecords !== undefined && (
                            <span className="text-gray-400">•</span>
                          )}
                          {totalRecords !== undefined && (
                            <span>
                              {totalRecords}{' '}
                              {totalRecords === 1 ? 'record' : 'records'}
                            </span>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onPageChange(currentPage + 1)}
                          disabled={!hasNext || currentPage >= totalPages}
                          rightIcon={<ArrowRight />}
                        >
                          Next
                        </Button>
                      </div>
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>
    </div>
  );
}
