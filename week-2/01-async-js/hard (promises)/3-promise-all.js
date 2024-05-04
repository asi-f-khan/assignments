/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

//Promise All -> sbka ho jane ka wait krega tb return pr agar koi rej hogya toh turant rej return

function wait(t) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();
  const promise1 = wait(t1);
  const promise2 = wait(t2);
  const promise3 = wait(t3);

  return Promise.all([promise1, promise2, promise3]).then(() => {
    const end = Date.now();
    return end - start;
  });
}

module.exports = calculateTime;
