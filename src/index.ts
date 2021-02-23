// Styles
import "./assets/app.scss";
// Components
import Accordion from "./components/Accordion/Accordion";
import BackTop from "./components/util/BackTop/BackTop";
import Badge from "./components/Badge/Badge";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Button from "./components/Button/Button";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Card from "./components/Card/Card";
import Collapse from "./components/Collapse/Collapse";
import Checkbox from "./components/form_elements/Checkbox/Checkbox";
import Container from "./components/util/Container/Container";
import File from "./components/form_elements/File/File";
import Flex from "./components/util/Flex/Flex";
import Input from "./components/form_elements/Input/Input";
import InputGroup from "./components/form_elements/InputGroup/InputGroup";
import LineLoader from "./components/LineLoader/LineLoader";
import ListGroup from "./components/ListGroup/ListGroup";
import Navbar from "./components/Navbar/Navbar";
import Portal from "./components/util/Portal/Portal";
import PortalWrapper from "./components/util/Portal/PortalWrapper";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ProgressRing from "./components/ProgressRing/ProgressRing";
import Radio from "./components/form_elements/Radio/Radio";
import Slider from "./components/form_elements/Slider/Slider";
import SpinnerLoader from "./components/SpinnerLoader/SpinnerLoader";
import Switch from "./components/form_elements/Switch/Switch";
import TextArea from "./components/form_elements/TextArea/TextArea";

//Animation
import CollapseFade from "./components/util/animations/CollapseFade";
import CollapseShow from "./components/util/animations/CollapseShow";
import Fade from "./components/util/animations/Fade";
import FadePortal from "./components/util/animations/FadePortal";
import ZoomPortal from "./components/util/animations/ZoomPortal";

//Hooks
import { useKeyPress } from "./hooks/useKeyPress";
import { useWindowResize } from "./hooks/useWindowResize";

//Context

export {
	//COMPONENTS
	Accordion,
	BackTop,
	Badge,
	Breadcrumbs,
	Button,
	ButtonGroup,
	Card,
	Collapse,
	Checkbox,
	Container,
	File,
	Flex,
	Input,
	InputGroup,
	LineLoader,
	ListGroup,
	Navbar,
	Portal,
	PortalWrapper,
	ProgressBar,
	ProgressRing,
	Radio,
	Slider,
	SpinnerLoader,
	Switch,
	TextArea,
	//ANIM
	CollapseFade,
	CollapseShow,
	Fade,
	FadePortal,
	ZoomPortal,
	//HOOKS
	useKeyPress,
	useWindowResize,
	//CONTEXT
};
