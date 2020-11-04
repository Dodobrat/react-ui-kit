import React, { forwardRef } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { ButtonProps } from "./Button.types";

const MotionButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const AnimeButton = motion.custom(Button);

	return <AnimeButton {...props} ref={ref} />;
});

export default MotionButton;
