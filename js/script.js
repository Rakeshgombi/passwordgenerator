function generate() {
  var uppercase =
    document.getElementById("upper").checked === true ? true : false;
  var lowercase =
    document.getElementById("lower").checked === true ? true : false;
  var numbers =
    document.getElementById("num").checked === true ? true : false;
  var symbols =
    document.getElementById("symbols").checked === true ? true : false;
  var len = document.getElementById("length").value;
  if (len < 8) {
    len = 8;
  }
  if (!(uppercase || lowercase || numbers || symbols)) {
    alert("Please select atleast one input");
  } else if (uppercase || lowercase || numbers || symbols) {
    var str = [
      "ABCDEFHIJKLMNOPQRSTUVWXYZ",
      "abcdefghijklmnopqrstuvwxyz",
      "0123456789",
      `!#$&%]'()*+-/:;<=>?@^_~{|}."`,
    ];
    var str_user = [];
    uppercase === true ? (str_user = str[0]) : 0;
    lowercase === true ? (str_user += str[1]) : 0;
    numbers === true ? (str_user += str[2]) : 0;
    symbols === true ? (str_user += str[3]) : 0;
    // console.log(str_user);
    if (str_user) {
      let len_str = str_user.length;
      var v = Math.floor(Math.random() * str_user.length);
      var password = str_user[v];

      for (let i = 0; i < len; i++) {
        v = Math.floor(Math.random() * str_user.length);
        // console.log(v);
        password += str_user[v];
      }
      // console.log(password);
      document.getElementById("gen-pass").value = password;
    } else {
      alert("Minmum check mark 1 option for generation password");
    }
  }
}

function change() {

  var length = document.querySelector('#length');
  document.querySelector('#value').innerHTML = length.value;
}
function copy() {
  /* Get the text field */
  var copyText = document.getElementById("gen-pass");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */


  /* Copy the text inside the text field */
  document.execCommand("copy");

}

function copy() {
  var copyText = document.getElementById("gen-pass");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy";
}