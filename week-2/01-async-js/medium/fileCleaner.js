function fileCleaner(str) {
  str = str.trim();
  str = str.split("");
  var ans = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      if (ans[ans.length - 1] != " ") {
        ans += " ";
      }
    } else if (str[i] != "\n") {
      ans += str[i];
    }
  }
  console.log(ans);
}

var str = `Hello             
  world    my    name 
  
  is     
    Asif.`;

fileCleaner(str);
