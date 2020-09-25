var inquirer = require('inquirer');
var gulp = require('gulp');

gulp.task('default', function(done) {
    inquirer.prompt([{
        type: 'confirm',
        message: 'Do you want to test?',
        default: true,
        name: 'test'
    }], function(answers) {
        if(answers.test=='y') {
            gulp.start('testOperand');
        }
        done();
    });
});

gulp.task('testOperand', function() { 
      return new Promise(function(resolve, reject) {
        console.log("Test run complete...");
        resolve();
      });
});