const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Bundler specific constants
const BUNDLERCONFIGNAME = 'rollup.config.js';
const BUNDLERCOMMAND = 'rollup --config ';

// Gets path to recursively bundle
let BASEPATH = './exercises';
const arg = process.argv[2];
if(arg) BASEPATH += "/" + arg;

// Gets all directories contained in the current directory
const { promises: { readdir } } = fs;
const getDirectories = async source =>
	(await readdir(source, { withFileTypes: true }))
		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name);

// Bundles the specified directory
async function bundlePath(path) {
	try {
		const { stdout, stderr } = await exec(BUNDLERCOMMAND + path);
		if(stdout) console.log(stdout);
		if(stderr) console.log(stderr);
	} catch (e) {
		console.error(e); // should contain code (exit code) and signal (that caused the termination).
	}
}

// Bundles the specified dir if it there is a bundler config recursively
async function traverseAndBundle(path) {
	const result = await fs.promises.readdir(path);
	if(result.length === 0) return;

	let isProjectFolder = false;
	result.forEach(file => {
		if (file === BUNDLERCONFIGNAME) isProjectFolder = true;
	});

	if (isProjectFolder) {
		const bundlerPath = path + '/' + BUNDLERCONFIGNAME;
		await bundlePath(bundlerPath);
	}

	const directories = await getDirectories(path);
	for (const directory of directories) {
		await traverseAndBundle(path + '/' + directory);
	}
}

traverseAndBundle(BASEPATH);