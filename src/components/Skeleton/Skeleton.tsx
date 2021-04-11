// Auto-Generated
import React from "react";
import cn from "classnames";

import { SkeletonProps } from "./Skeleton.types";
import { useConfig } from "../../context/ConfigContext";
import { generateStyleClasses } from "../../helpers/classnameGenerator";

const Skeleton: React.ForwardRefRenderFunction<HTMLDivElement, SkeletonProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const { className, pigment = config.skeletonPigment ?? "default", flavor = config.flavor ?? "default", children, ...rest } = props;

	const classDefaults = {
		pigment,
		flavor,
	};

	const classBase = "dui__skeleton";

	return <div data-testid='Skeleton' className={cn(classBase, generateStyleClasses(classDefaults), className)} {...rest} ref={ref} />;
};

export default React.forwardRef<HTMLDivElement, SkeletonProps>(Skeleton);
