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
  console.log('Testing Level 13...');
  await sleep(2000);
  console.log('Verify authentication...');
  await sleep(1000);
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
