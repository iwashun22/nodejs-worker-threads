const { doFib, doFibWithWorker } = require('./doFib');
const { logTime, blueText, yellowText } = require('./logger');

const main = async () => {
  try {
    await getFibonacciValues(() => doFib(40), 8);
    await getFibonacciValues(() => doFibWithWorker(40), 8);
  } catch (err) {
    console.error(err);
  }
}

async function getFibonacciValues(fn, times) {
  const arr = new Array(times);
  arr.fill(fn);
  separator();

  const start = Date.now();
  const values = await Promise.all(arr.map(f => f()));
  console.log(values);
  const text = yellowText("\n>>>>\t") + "All done in";
  logTime(text, Date.now() - start);

  separator();
  return values;
}

function separator() {
  console.log(blueText("\n================\n"));
}

main();