// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { TableProps } from "./Table.types";
import { useConfig } from "../../context/ConfigContext";
import { TableBodyProps, TableFootProps, TableHeadProps, TableRowProps, TableCellProps, TableHCellProps } from "./TableSubComponents.types";
import { TableBody, TableCell, TableFoot, TableHCell, TableHead, TableRow } from "./TableSubComponents";
import Card from "../Card/Card";
import { generateStyleClasses } from "../../helpers/classnameGenerator";

export interface TableComponent extends React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLDivElement>> {
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
	} = useConfig();

	const {
		className,
		innerClassName,
		innerRef,
		elevation = config.elevation ?? "subtle",
		sizing = config.sizing ?? "md",
		pigment = "default",
		flavor = config.flavor ?? "default",
		condensed = false,
		bordered = false,
		disableWhileLoading = true,
		isLoading = false,
		children,
		...rest
	} = props;

	const classDefaults = {
		sizing,
	};

	const passThroughProps = {
		pigment,
		elevation,
		flavor,
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
				},
				className
			)}
			{...passThroughProps}
			{...rest}
			ref={ref}>
			<table role='table' className={cn(classBase, generateStyleClasses(classDefaults), innerClassName)} ref={innerRef}>
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
