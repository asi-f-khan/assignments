function StandardclockAndAmPm() {
  setInterval(function () {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var nh = hour % 12;
    if (hour == 12) {
      nh = 12;
    }
    var str = hour >= 12 ? "PM" : "AM";

    var hp1 = hour < 10 ? "0" : "";
    var hp2 = nh < 10 ? "0" : "";
    var minp1 = min < 10 ? "0" : "";
    var secp1 = sec < 10 ? "0" : "";

    console.log(`${hp1}${hour}:${minp1}${min}:${secp1}${sec}`);
    console.log(`${hp2}${nh}:${minp1}${min}:${secp1}${sec}:${str}`);
  }, 1000);
}

StandardclockAndAmPm();
