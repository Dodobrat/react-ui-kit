module.exports = (componentName) => ({
    content: `// Auto-Generated
export interface ${componentName}Props {
    children: any;
}
`,
    extension: `.types.ts`,
});
