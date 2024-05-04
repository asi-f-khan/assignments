var ct = 0;
function counteragain() {
  setTimeout(() => {
    ct++;
    console.clear();
    console.log(ct);
    counteragain();
  }, 1 * 1000);
}

counteragain();
