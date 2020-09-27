var inquirer = require('inquirer');
var print = require('gulp-print');
var gulp = require('gulp');
var async = require('async');
var ora = require('ora');
gulp.task('test-artificial-load', done=>  {
   task(100);
   done()
 });
 gulp.task('test-aggregation', done=>  {
   task(100);
   done()
 });
gulp.task('test-registration', done=>  {
   task(100);
   done()
 });
 
 gulp.task('test-level-play', done => {
    // ... code gulp.src( ... )
    async.series(([
       function(callback) {
         console.group();
         setTimeout(()=> { console.log("Beginning tests for level play..."); }, 2000);
         
         callback(null,'test-level-play')
       },
       function(callback) {
         task(10000);
         setTimeout(()=> { console.log("Levels tested..."); }, 2000);
          console.groupEnd();
       }

    ]))
    
    console.group();
    console.log("Level play tests complete.")
    for (let i=0; i<10; i++) { 
      task(i); 
    }
    console.groupEnd()    
    console.groupEnd()    
    done();
 });
 
 gulp.task('test-throttle', done => {
    done();
 });
gulp.task('default', gulp.parallel(
   'test-registration',
   'test-level-play',
   'test-throttle',
   'test-artificial-load',
   'test-aggregation'
)
);
function task(i) { 
   setTimeout(function() { 
       console.log("."); 
   }, 200 * i); 
 } 
// gulp.task('default', function(done) {
//     inquirer.prompt([{
//         type: 'confirm',
//         message: 'Do you want to test?',
//         default: true,
//         name: 'test'
//     }], function(answers) {
//         if(answers.test=='y') {
//             gulp.start('message');
//         }
//         done();
//     });
// });

gulp.task('testOperand', function() { 
      return new Promise(function(resolve, reject) {
        console.log("Test run complete...");
        resolve();
      });
});

