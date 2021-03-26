// Auto-Generated
import React, { useContext, useEffect, useRef, useState } from "react";
import cn from "classnames";

import { SwitchGroupProps } from "./SwitchGroup.types";
import { GlobalContext } from "../../../context/GlobalContext/GlobalContext";
import { createRipple, mergeRefs } from "../../../helpers/functions";
import { useWindowResize } from "../../../hooks/useWindowResize";
import { generateCustomizationClasses, generateSeamlessClasses } from "../../../helpers/classnameGenerator";

const SwitchGroup: React.ForwardRefRenderFunction<HTMLDivElement, SwitchGroupProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		name,
		elevation = "none",
		pigment = config.pigment ?? "primary",
		size = config.size ?? "md",
		rounded = config.rounded ?? false,
		flat = config.flat ?? false,
		seamless = false,
		wide = false,
		withRipple = config.withRipple ?? true,
		onPointerDown,
		options = [],
		activeOption = null,
		onSwitch,
		children,
		...rest
	} = props;

	const classDefaults = {
		size,
		rounded,
		flat,
		pigment,
		elevation,
		seamless,
	};

	const classBase = "dui__switch__group";

	const { width } = useWindowResize(500);

	const switchGroupIndicatorRef = useRef(null);
	const switchGroupOptionsRef = useRef(null);
	const itemsRef = useRef([]);
	const [active, setActive] = useState<string>(activeOption);

	const adjustActiveIndicatorPosition = () => {
		const indicator = switchGroupIndicatorRef.current;
		const optionsList = switchGroupOptionsRef.current?.children ?? [];

		if (optionsList.length > 0) {
			for (const item of optionsList) {
				if (item.dataset.active === "true") {
					indicator.style.left = `${item.offsetLeft}px`;
					indicator.style.width = `${item.offsetWidth}px`;
				}
			}
		}
	};

	useEffect(() => {
		itemsRef.current = itemsRef.current.slice(0, options.length);

		if (!activeOption && options.length > 0) {
			setActive(() => options[0].value);
		}
	}, [options]);

	useEffect(() => {
		adjustActiveIndicatorPosition();
		return () => {
			adjustActiveIndicatorPosition();
		};
	}, []);

	useEffect(() => {
		adjustActiveIndicatorPosition();
		return () => {
			adjustActiveIndicatorPosition();
		};
	}, [active, width]);

	const handleOnPointerDown: (e: React.PointerEvent, idx: number) => void = (e, idx) => {
		if (withRipple) {
			createRipple({ e, elem: itemsRef.current[idx], pigment });
		}

		if (onPointerDown) {
			onPointerDown(e);
		}
	};

	const handleOnChange: (e: React.ChangeEvent, option: any) => void = (e, option) => {
		setActive(() => option.value);

		if (onSwitch) {
			onSwitch({ e, option });
		}
	};

	useEffect(() => {
		setActive(activeOption);
		return () => {
			setActive(null);
		};
	}, [activeOption]);

	return (
		<div
			data-testid='SwitchGroup'
			className={cn(
				classBase,
				{
					[`${classBase}--wide`]: wide,
				},
				generateCustomizationClasses(classBase, classDefaults),
				generateSeamlessClasses(classBase, classDefaults),
				className
			)}
			tabIndex={-1}
			{...rest}
			ref={mergeRefs([switchGroupOptionsRef, ref])}>
			<div className={cn(`${classBase}__indicator`)} tabIndex={-1} ref={switchGroupIndicatorRef} />
			{options.map((option, idx) => {
				const id = `${name}_${option.value}`;

				return (
					<label
						key={id}
						htmlFor={id}
						className={cn(`${classBase}__item`, {
							[`${classBase}__item--active`]: active === option.value,
						})}
						data-active={active === option.value}>
						<input
							type='radio'
							name={name}
							id={id}
							disabled={option.disabled}
							className={`${classBase}__item__input`}
							value={option.value}
							checked={active === option.value}
							onChange={(e) => handleOnChange(e, option)}
							{...option.props}
						/>
						<div
							className={`${classBase}__item__value`}
							onPointerDown={(e) => handleOnPointerDown(e, idx)}
							ref={(el) => (itemsRef.current[idx] = el)}>
							{option.label}
						</div>
					</label>
				);
			})}
		</div>
	);
};

export default React.forwardRef<HTMLDivElement, SwitchGroupProps>(SwitchGroup);
