// Auto-Generated
import React, { createContext, useContext, useMemo, useState } from "react";
import { AlertAnimation } from "../components/Alert/Alert.types";
import { CollapseAnimation } from "../components/Collapse/CollapseSubComponents.types";
import { VerticalAlign, PortalAnimation } from "../components/Portal/Portal.types";
import { Positions, ElevationOptions, PigmentOptions, ProgressLabelValue, SizeOptions } from "../helpers/global.types";

const ConfigContext = createContext(null);

interface GlobalOptions {
	flat?: boolean;
	rounded?: boolean;
	pigment?: PigmentOptions;
	pigmentColor?: PigmentOptions;
	size?: SizeOptions;
	elevation?: ElevationOptions;
	withRipple?: boolean;
	//-----Component Specific-----
	//--Alert
	alertElevation?: ElevationOptions;
	alertPigment?: PigmentOptions;
	alertAnimation?: AlertAnimation;
	alertWithIcon?: boolean;
	alertIsDismissible?: boolean;
	alertIsDismissibleOnClick?: boolean;
	alertDismissibleComponent?: React.ReactNode;
	//--Badge
	badgeElevation?: ElevationOptions;
	//--Breadcrumbs
	breadcrumbsContained?: boolean;
	breadcrumbsElevation?: ElevationOptions;
	breadcrumbsPigment?: PigmentOptions;
	breadcrumbsSeparator?: React.ReactNode;
	//--Button
	btnKeyboardOnlyFocusRing?: boolean;
	btnSpongy?: boolean;
	btnElevation?: ElevationOptions;
	//--Button Group
	btnGroupSpongy?: boolean;
	//--Card
	cardImgPosition?: Positions;
	//--Collapse
	collapseScrollIntoViewOnToggle?: boolean;
	collapseIndicator?: boolean;
	collapseIndicatorComponent?: React.ReactNode;
	collapseAnimation?: CollapseAnimation;
	//--Drawer
	drawerElevation?: ElevationOptions;
	drawerKeyboard?: boolean;
	drawerPosition?: Positions;
	drawerBodyScrollDisable?: boolean;
	//--Dropdown
	dropdownElevation?: ElevationOptions;
	//--Heading
	headingAs?: React.ElementType;
	//--List Group
	listGroupCollapseIndicator?: boolean;
	listGroupCollapseIndicatorComponent?: React.ReactNode;
	listGroupAnimation?: CollapseAnimation;
	listGroupNestedCollapseIndent?: boolean;
	//--Portal
	portalKeyboard?: boolean;
	portalSafeZoneSize?: SizeOptions;
	portalVerticalAlign?: VerticalAlign;
	portalAnimation?: PortalAnimation;
	portalBodyScrollDisable?: boolean;
	//--Toolip
	tooltipElevation?: ElevationOptions;
	tooltipPigment?: PigmentOptions;
	tooltipSize?: SizeOptions;
	tooltipRounded?: boolean;
	tooltipFlat?: boolean;
	//--Progress Bar
	progressBarLabeled?: boolean;
	progressBarLabelValue?: ProgressLabelValue;
	progressBarLabelPosition?: Positions;
	//--Progress Ring
	progressRingLabeled?: boolean;
	progressRingLabelValue?: ProgressLabelValue;
	progressRingCounterClockWise?: boolean;
	//--Skeleton
	skeletonPigment?: PigmentOptions;
	//--Text
	textAs?: React.ElementType;
}

const ConfigProvider: React.FC = ({ children }) => {
	const [config, setConfig] = useState<GlobalOptions>({});

	const appConfig = useMemo(() => ({ config, setConfig }), [config, setConfig]);

	return (
		<ConfigContext.Provider
			value={{
				appConfig,
			}}>
			{children}
		</ConfigContext.Provider>
	);
};

export const useConfig = () => {
	const context = useContext(ConfigContext);

	if (context === undefined) {
		throw new Error("useConfig must be used within a ConfigContextProvider");
	}

	return context;
};

export default ConfigProvider;
