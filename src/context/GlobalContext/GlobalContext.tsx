// Auto-Generated
import React, { createContext, useMemo, useState } from "react";
import { AlertAnimation } from "../../components/Alert/Alert.types";
import { CollapseAnimation } from "../../components/Collapse/CollapseSubComponents.types";
import { VerticalAlign, PortalAnimation } from "../../components/Portal/Portal.types";
import { Directions, ElevationOptions, PigmentOptions, ProgressLabelValue, SizeOptions } from "../../helpers/global.types";

export const GlobalContext = createContext(null);

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
	cardImgPosition?: Directions;
	//--Collapse
	collapseScrollIntoViewOnToggle?: boolean;
	collapseIndicator?: boolean;
	collapseIndicatorComponent?: React.ReactNode;
	collapseAnimation?: CollapseAnimation;
	//--Drawer
	drawerElevation?: ElevationOptions;
	drawerKeyboard?: boolean;
	drawerPosition?: Directions;
	drawerBodyScrollDisable?: boolean;
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
	progressBarLabelPosition?: Directions;
	//--Progress Ring
	progressRingLabeled?: boolean;
	progressRingLabelValue?: ProgressLabelValue;
	progressRingCounterClockWise?: boolean;
	//--Skeleton
	skeletonPigment?: PigmentOptions;
	//--Text
	textAs?: React.ElementType;
}

const GlobalContextProvider: React.FC = ({ children }) => {
	const [config, setConfig] = useState<GlobalOptions>({});

	const appConfig = useMemo(() => ({ config, setConfig }), [config, setConfig]);

	return (
		<GlobalContext.Provider
			value={{
				appConfig,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
