const fs = require("fs");
const templates = require("./context-templates");

const componentName = process.argv[2];
let hookName = process.argv[3];

if (!componentName) {
	console.error("Please supply a valid component name".red);
	process.exit(1);
}

if (!hookName) {
	console.log("No hook name supplied. Using componentName instead");
	hookName = `use${componentName}`;
}

console.log("Creating Context Templates with name: " + componentName);

let path = "";

const generatedTemplates = templates.map((template) => template(componentName, hookName));

generatedTemplates.forEach((template) => {
	path = `./src/context/${componentName}Context${template.extension}`;

	if (fs.existsSync(path)) {
		console.error(`%c${componentName}Context already exists!`, "color: red");
		process.exit(1);
	} else {
		fs.writeFileSync(path, template.content);
	}
});

console.log("Successfully created component: " + path.green);
