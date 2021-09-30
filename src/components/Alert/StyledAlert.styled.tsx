import styled from "styled-components";

const StyledAlert = styled.div`
	${({ theme }) => {
		console.log(theme);
		return `
    background: red
`;
	}}
	position: relative;
	display: flex;
	align-items: flex-start;
	position: relative;
	padding: 0.75em;
	outline: none;
`;

export default StyledAlert;
