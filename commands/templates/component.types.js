module.exports = (componentName) => ({
	content: `// Auto-Generated
export interface ${componentName}Props {
	className?: string;
	children?: JSX.Element;
}
`,
	extension: `.types.ts`,
});
