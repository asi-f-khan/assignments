var ct = 5;
function counter() {
  var x = setInterval(function () {
    ct--;
    console.clear();
    console.log(ct);
    if (ct == 0) {
      clearInterval(x);
    }
  }, 1 * 1000);
}

counter();
