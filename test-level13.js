var clc = require("cli-color");
function sleep(ms) {
  return new Promise(resolve=>setTimeout(resolve, ms));
}

console.log("asdfasdf");
for (i = 0; i < 10; i++) {
  process.stdout.write(".");
  sleep(100);
  demo();
}

async function demo() {
  console.log(clc.red.bgWhite.underline("Testing Level 13..."));
  await sleep(2000);
  console.log(clc.yellow.bgWhite.underline('Verify authentication...'));
  await sleep(1020);
  console.log('Validate keys...');
  await sleep(1301);

  // Sleep in loop
  for (let i = 0; i < 5; i++) {
    if (i === 3)
      await sleep(2000);
    console.log(i);
  }
}

demo();
