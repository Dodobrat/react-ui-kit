import React, { forwardRef } from "react";
import cn from "classnames";
import { TableHeadProps, TableBodyProps, TableFootProps, TableRowProps, TableCellProps, TableHCellProps } from "./TableSubComponents.types";

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>((props, ref) => {
	const { className, children, ...rest } = props;

	return (
		<thead role='rowgroup' className={cn("dui__table__head", className)} {...rest} ref={ref}>
			{children}
		</thead>
	);
});

TableHead.displayName = "TableHead";

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => {
	const { className, children, ...rest } = props;

	return (
		<tbody role='rowgroup' className={cn("dui__table__body", className)} {...rest} ref={ref}>
			{children}
		</tbody>
	);
});

TableBody.displayName = "TableBody";

export const TableFoot = forwardRef<HTMLTableSectionElement, TableFootProps>((props, ref) => {
	const { className, children, ...rest } = props;

	return (
		<tfoot role='rowgroup' className={cn("dui__table__foot", className)} {...rest} ref={ref}>
			{children}
		</tfoot>
	);
});

TableFoot.displayName = "TableFoot";

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => {
	const { className, children, ...rest } = props;

	return (
		<tr role='row' className={cn("dui__table__row", className)} {...rest} ref={ref}>
			{children}
		</tr>
	);
});

TableRow.displayName = "TableRow";

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>((props, ref) => {
	const { className, children, ...rest } = props;

	return (
		<td role='cell' className={cn("dui__table__cell", className)} {...rest} ref={ref}>
			{children}
		</td>
	);
});

TableCell.displayName = "TableCell";

export const TableHCell = forwardRef<HTMLTableHeaderCellElement, TableHCellProps>((props, ref) => {
	const { className, children, ...rest } = props;

	return (
		<th role='rowheader' className={cn("dui__table__header", className)} {...rest} ref={ref}>
			{children}
		</th>
	);
});

TableHCell.displayName = "TableHCell";
