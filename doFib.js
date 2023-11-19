const { Worker } = require('worker_threads');
const fibonacci = require('./fibonacci');
const { logTaskDone } = require('./logger');

const doFib = (n) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const result = fibonacci(n);
    logTaskDone("doFib()", Date.now() - start);
    resolve(result);
  })
}

const doFibWithWorker = (n) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const worker = new Worker("./fibonacci-worker", {
      workerData: {
        iterations: n
      }
    });
    // when the process is done
    worker.once('message', (value) => {
      logTaskDone(`worker ${worker.threadId}`, Date.now() - start);
      resolve(value);
    });
    // on error
    worker.once('error', (err) => reject(err));
  })
}

module.exports = {
  doFib,
  doFibWithWorker
}