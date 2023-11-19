const textColor = (ansiColor) => (str) => {
  return `${ansiColor}${str}\x1b[0m`;
};
const redText = textColor("\x1b[31m");
const greenText = textColor("\x1b[32m");
const blueText = textColor("\x1b[34m");
const yellowText = textColor("\x1b[33m");
const reverseText = textColor("\x1b[7m");

function logTime(labelText, t) {
  // t is in millisecond
  // when it's lesser than 2500 log with green
  if(t < 2500) {
    formatTimeLog(labelText, greenText(`${t}ms`));
  } else {
    formatTimeLog(labelText, redText(`${t}ms`));
  }
}
function formatTimeLog(str, t) {
  console.log(str + ": " + t);
}

function logTaskDone(task, t) {
  const labelText = reverseText(` ${task} `)+" done in";
  logTime(labelText, t);
} 

module.exports = {
  logTime,
  logTaskDone,
  redText,
  greenText,
  blueText,
  yellowText,
  reverseText
}