module.exports = (componentName) => ({
	content: `// Auto-Generated
export interface ${componentName}Props {
	children?: React.ReactNode;
}
`,
	extension: `.types.ts`,
});
