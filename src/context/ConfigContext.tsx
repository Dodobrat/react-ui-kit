// Auto-Generated
import React, { createContext, useContext, useMemo, useState } from "react";
import { AlertAnimation } from "../components/Alert/Alert.types";
import { CollapseAnimation } from "../components/Collapse/CollapseSubComponents.types";
import { VerticalAlign, PortalAnimation } from "../components/Portal/Portal.types";
import {
	Positions,
	ProgressLabelValue,
	AllElevationOptions,
	AllPigmentOptions,
	AllFlavorOptions,
	AllSizeOptions,
} from "../helpers/global.types";

const ConfigContext = createContext(null);

interface GlobalOptions {
	flavor?: AllFlavorOptions;
	//TODO: Deprecate Flat / Round
	flat?: boolean;
	rounded?: boolean;
	//----------------
	pigment?: AllPigmentOptions;
	pigmentColor?: AllPigmentOptions;
	size?: AllSizeOptions;
	elevation?: AllElevationOptions;
	withRipple?: boolean;
	//-----Component Specific-----
	//--Alert
	alertElevation?: AllElevationOptions;
	alertPigment?: AllPigmentOptions;
	alertPigmentColor?: AllPigmentOptions;
	alertAnimation?: AlertAnimation;
	alertWithIcon?: boolean;
	alertIsDismissible?: boolean;
	alertIsDismissibleOnClick?: boolean;
	alertDismissibleComponent?: React.ReactNode;
	//--Badge
	badgePigment?: AllPigmentOptions;
	badgePigmentColor?: AllPigmentOptions;
	badgeElevation?: AllElevationOptions;
	//--Breadcrumbs
	breadcrumbsContained?: boolean;
	breadcrumbsElevation?: AllElevationOptions;
	breadcrumbsPigment?: AllPigmentOptions;
	breadcrumbsSeparator?: React.ReactNode;
	//--Button
	btnKeyboardOnlyFocusRing?: boolean;
	btnSpongy?: boolean;
	btnElevation?: AllElevationOptions;
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
	drawerElevation?: AllElevationOptions;
	drawerKeyboard?: boolean;
	drawerPosition?: Positions;
	drawerBodyScrollDisable?: boolean;
	//--Dropdown
	dropdownElevation?: AllElevationOptions;
	//--Heading
	headingAs?: React.ElementType;
	//--List Group
	listGroupCollapseIndicator?: boolean;
	listGroupCollapseIndicatorComponent?: React.ReactNode;
	listGroupAnimation?: CollapseAnimation;
	listGroupNestedCollapseIndent?: boolean;
	//--Portal
	portalKeyboard?: boolean;
	portalSafeZoneSize?: AllSizeOptions;
	portalVerticalAlign?: VerticalAlign;
	portalAnimation?: PortalAnimation;
	portalBodyScrollDisable?: boolean;
	//--Toolip
	tooltipElevation?: AllElevationOptions;
	tooltipPigment?: AllPigmentOptions;
	tooltipSize?: AllSizeOptions;
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
	skeletonPigment?: AllPigmentOptions;
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
