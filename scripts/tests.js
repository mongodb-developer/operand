'use strict';
const chalk = require('chalk');
const Ora = require('ora');

const spinner = new Ora({
	discardStdin: false,
	text: 'Testing Operand, Level 13 - not discarding stdin',
	spinner: process.argv[2]
});

const spinnerDiscardingStdin = new Ora({
	text: 'Loading tests ',
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
	spinner.text = `Loading ${chalk.red('ai')}`;
}, 4000);

setTimeout(() => {
	spinner.color = 'green';
	spinner.indent = 2;
	spinner.text = 'Testing User Registration...';
}, 5000);

setTimeout(() => {
	spinner.indent = 0;
	spinner.spinner = 'moon';
	spinner.text = 'Testing Game Succession...';
}, 6000);

setTimeout(() => {
	spinner.succeed();
}, 7000);

setTimeout(() => {
	spinner.indent = 0;
	spinner.spinner = 'moon';
	spinner.text = 'Testing Game Credential Validation...';
}, 8000);

setTimeout(() => {
	spinner.succeed();
}, 9000);

setTimeout(() => {
	spinner.indent = 0;
	spinner.spinner = 'moon';
	spinner.text = 'Testing Multiplayer';
}, 10000);

setTimeout(() => {
	spinner.succeed();
}, 11000);

setTimeout(() => {
	spinner.indent = 0;
	spinner.spinner = 'moon';
	spinner.text = 'Testing Initial Launch';
}, 12000);

setTimeout(() => {
	spinner.succeed();
}, 13000);
setTimeout(() => {
	spinnerDiscardingStdin.succeed();
}, 13500);

setTimeout(() => {
	spinnerDiscardingStdin.start();
}, 13000);
setTimeout(() => {
	spinner.indent = 0;
   spinner.spinner = 'moon';
   spinner.color = 'green';
	spinner.text = 'Testing Transitions Launch';
}, 14000);

setTimeout(() => {
	spinner.succeed();
}, 15000);


// $ node example.js nameOfSpinner