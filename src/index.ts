// Styles
// Not injecting styles, allowing users to use sass to override variables
// Importing styles to generate minified css file for basic usage
import "./assets/app.scss";
// Components
export { default as Accordion } from "./components/Accordion/Accordion";
export { default as Alert } from "./components/Alert/Alert";
export { default as BackTop } from "./components/util/BackTop/BackTop";
export { default as Badge } from "./components/Badge/Badge";
export { default as Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";
export { default as Button } from "./components/Button/Button";
export { default as ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
export { default as Card } from "./components/Card/Card";
export { default as Collapse } from "./components/Collapse/Collapse";
export { default as Container } from "./components/util/Container/Container";
export { default as DragScroll } from "./components/util/DragScroll/DragScroll";
export { default as Drawer } from "./components/Drawer/Drawer";
export { default as Dropdown } from "./components/Dropdown/Dropdown";
export { default as Flex } from "./components/util/Flex/Flex";
export { default as Heading } from "./components/typography/Heading/Heading";
export { default as LineLoader } from "./components/LineLoader/LineLoader";
export { default as ListGroup } from "./components/ListGroup/ListGroup";
// export { default as Navbar } from "./components/Navbar/Navbar";
export { default as Portal } from "./components/Portal/Portal";
export { default as PortalWrapper } from "./components/util/PortalWrapper/PortalWrapper";
export { default as ProgressBar } from "./components/ProgressBar/ProgressBar";
export { default as ProgressRing } from "./components/ProgressRing/ProgressRing";
export { default as Skeleton } from "./components/Skeleton/Skeleton";
export { default as SpinnerLoader } from "./components/SpinnerLoader/SpinnerLoader";
export { default as Table } from "./components/Table/Table";
export { default as Tabs } from "./components/Tabs/Tabs";
export { default as Text } from "./components/typography/Text/Text";
export { default as Tooltip } from "./components/Tooltip/Tooltip";

//Form Elements
export { default as Checkbox } from "./components/form_elements/Checkbox/Checkbox";
export { default as FormControl } from "./components/form_elements/FormControl/FormControl";
export { default as Input } from "./components/form_elements/Input/Input";
export { default as InputGroup } from "./components/form_elements/InputGroup/InputGroup";
export { default as Radio } from "./components/form_elements/Radio/Radio";
export { default as Select } from "./components/form_elements/Select/Select";
export { default as Switch } from "./components/form_elements/Switch/Switch";
export { default as SwitchGroup } from "./components/form_elements/SwitchGroup/SwitchGroup";
export { default as TextArea } from "./components/form_elements/TextArea/TextArea";
export { default as Form } from "./components/form_elements/Form/Form";

//Pure Form Element
export { CheckboxComponent } from "./components/form_elements/Checkbox/Checkbox";
export { InputComponent } from "./components/form_elements/Input/Input";
export { RadioComponent } from "./components/form_elements/Radio/Radio";
export { SelectComponent } from "./components/form_elements/Select/Select";
export { SwitchComponent } from "./components/form_elements/Switch/Switch";
export { TextAreaComponent } from "./components/form_elements/TextArea/TextArea";

//Icons
export * from "./components/icons/index";

//Animation
export { default as CollapseFade } from "./components/util/animations/CollapseFade";
export { default as CollapseShow } from "./components/util/animations/CollapseShow";
export { default as Fade } from "./components/util/animations/Fade";
export { default as FadePortal } from "./components/util/animations/FadePortal";
export { default as ZoomPortal } from "./components/util/animations/ZoomPortal";
export { default as SlideIn } from "./components/util/animations/SlideIn";

//Hooks
export { useDarkMode } from "./hooks/useDarkMode";
export { useDebounce } from "./hooks/useDebounce";
export { useEventListener } from "./hooks/useEventListener";
export { useKeyPress } from "./hooks/useKeyPress";
export { useLocalStorage } from "./hooks/useLocalStorage";
export { useOnClickOutside } from "./hooks/useOnClickOutside";
export { usePrefersDarkMode } from "./hooks/usePrefersDarkMode";
export { useReduceMotion } from "./hooks/useReduceMotion";
export { useStateHistory } from "./hooks/useStateHistory";
export { useWindowResize } from "./hooks/useWindowResize";

//Context
export { useConfig } from "./context/ConfigContext";
export { default as ConfigProvider } from "./context/ConfigContext";
