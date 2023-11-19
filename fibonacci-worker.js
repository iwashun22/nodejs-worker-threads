const fibonacci = require('./fibonacci');
const { workerData, parentPort } = require('worker_threads');

const result = fibonacci(workerData.iterations);
parentPort.postMessage(result);