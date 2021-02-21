const fs = require("fs");
const templates = require("./context-templates");

const componentName = process.argv[2];

if (!componentName) {
	console.error("Please supply a valid component name".red);
	process.exit(1);
}

console.log("Creating Context Templates with name: " + componentName);

const componentDirectory = `./src/context/${componentName}`;

if (fs.existsSync(componentDirectory)) {
	console.error(`Component ${componentName} already exists.`.red);
	process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
	fs.writeFileSync(`${componentDirectory}/${componentName}${template.extension}`, template.content);
});

console.log("Successfully created component under: " + componentDirectory.green);