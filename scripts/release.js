'use strict';
const chalk = require('chalk');
const Ora = require('ora');

const spinner = new Ora({
	discardStdin: false,
	text: 'Releasing Operand, Level 13 - not discarding stdin',
	spinner: process.argv[2]
});

const spinnerDiscardingStdin = new Ora({
	text: 'Releasing without test run...',
	spinner: process.argv[2]
});

spinnerDiscardingStdin.start();

setTimeout(() => {
	spinnerDiscardingStdin.succeed();
}, 1000);

setTimeout(() => {
	spinnerDiscardingStdin.start();
}, 2000);

setTimeout(() => {
	spinnerDiscardingStdin.succeed();
	spinner.start();
}, 3000);

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = `git commit ... ${chalk.green('complete')}`;
}, 4000);

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = `git push origin level13 ... ${chalk.green('complete')}`;
}, 4300);

setTimeout(() => {
	spinner.color = 'green';
	spinner.indent = 2;
	spinner.text = `Releasing User Registration... ${chalk.green('complete')}`;
}, 5000);

setTimeout(() => {
	spinner.indent = 0;
	spinner.spinner = 'moon';
	spinner.text = `Releasing Game Succession... ${chalk.green('complete')}`;
}, 6000);

setTimeout(() => {
	spinner.succeed();
}, 7000);

setTimeout(() => {
	spinner.indent = 0;
	spinner.spinner = 'moon';
	spinner.text = `Releasing Game Credential Validation... ${chalk.green('complete')}`;
}, 8000);

setTimeout(() => {
	spinner.succeed();
}, 9000);

setTimeout(() => {
	spinner.succeed();
}, 11000);

setTimeout(() => {
	spinner.indent = 0;
	spinner.spinner = 'moon';
	spinner.text = `Releasing Initial Launch ... ${chalk.green('complete')}`;
}, 12000);

setTimeout(() => {
	spinner.succeed();
}, 13000);
setTimeout(() => {
	spinnerDiscardingStdin.succeed();
}, 13500);


setTimeout(() => {
	spinner.succeed();
}, 15000);


// $ node example.js nameOfSpinner
