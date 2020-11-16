module.exports = (componentName) => ({
	content: `// Auto-Generated
export interface ${componentName}Props {
	className?: string;
	children?: React.ReactNode;
}
`,
	extension: `.types.ts`,
});
