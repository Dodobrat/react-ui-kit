// Auto-Generated
import React, { forwardRef, useContext } from "react";
import cn from "classnames";

import { TableProps } from "./Table.types";
import { GlobalContext } from "../../context/GlobalContext/GlobalContext";
import { TableBodyProps, TableFootProps, TableHeadProps, TableRowProps, TableCellProps, TableHCellProps } from "./TableSubComponents.types";
import { TableBody, TableCell, TableFoot, TableHCell, TableHead, TableRow } from "./TableSubComponents";
import Card from "../Card/Card";
import { PigmentOptions, SizeOptions } from "../../helpers/global";

interface TableComponent extends React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLDivElement>> {
	HCell: React.ForwardRefExoticComponent<TableHCellProps & React.RefAttributes<HTMLTableHeaderCellElement>>;
	Cell: React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLTableCellElement>>;
	Row: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableRowElement>>;
	Head: React.ForwardRefExoticComponent<TableHeadProps & React.RefAttributes<HTMLTableSectionElement>>;
	Body: React.ForwardRefExoticComponent<TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
	Foot: React.ForwardRefExoticComponent<TableFootProps & React.RefAttributes<HTMLTableSectionElement>>;
}

const Table = forwardRef<HTMLDivElement, TableProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		innerClassName,
		innerRef,
		elevation = config.elevation ?? "subtle",
		size = config.size ?? "md",
		pigment = null,
		flat = config.flat ?? false,
		allowOverflow = true,
		condensed = false,
		bordered = false,
		disableWhileLoading = true,
		isLoading = false,
		children,
		...rest
	} = props;

	const classDefaults = {
		elevation,
		pigment,
		flat,
		isLoading,
		disableWhileLoading,
	};

	const classBase = "dui__table";

	return (
		<Card
			className={cn(
				`${classBase}__container`,
				{
					[`${classBase}__container--condensed`]: condensed,
					[`${classBase}__container--bordered`]: bordered,
					[`${classBase}__container--${pigment}`]: PigmentOptions.includes(pigment),
				},
				className
			)}
			allowOverflow={allowOverflow}
			{...classDefaults}
			{...rest}
			ref={ref}>
			<table
				role='table'
				className={cn(
					classBase,
					{
						[`${classBase}--flat`]: flat,
						[`${classBase}--${size}`]: SizeOptions.includes(size) && size !== "md",
					},
					innerClassName
				)}
				ref={innerRef}>
				{children}
			</table>
		</Card>
	);
}) as TableComponent;

Table.HCell = TableHCell;
Table.Cell = TableCell;
Table.Row = TableRow;
Table.Head = TableHead;
Table.Body = TableBody;
Table.Foot = TableFoot;

export default Table;
