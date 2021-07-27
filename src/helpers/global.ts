//Customization helpers
export const PigmentOptions = ["none", "default", "primary", "secondary", "success", "warning", "info", "danger"];
export const ElevationOptions = ["none", "subtle", "light", "medium", "strong", "interstellar"];
export const FlavorOptions = ["default", "flat", "rounded"];
export const SizeOptions = ["xs", "sm", "md", "lg", "xl"];
export const ContainerSizeOptions = ["xs", "sm", "md", "lg", "xl", "fhd", "fluid"];
export const PortalSizeOptions = ["xs", "sm", "md", "lg", "xl", "fullscreen"];

//Flex Specific
export const FlexAlignOptions = ["stretch", "flex-start", "flex-end", "center", "baseline"];
export const FlexJustifyOptions = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];
export const FlexDirectionOptions = ["row", "row-reverse", "column", "column-reverse"];
export const FlexWrapOptions = ["nowrap", "wrap", "wrap-reverse"];

const cols = Array.from(new Array(12), (_, idx) => `${idx + 1}`);
export const FlexColOptions = [...cols, "auto", "reset"];

//Util helpers
export const Breakpoints = ["base", "xs", "sm", "md", "lg", "xl", "fhd"];
