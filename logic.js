function getVal() {
  const zips = ["75093", "76071", "1234"];
  var finder = false;
  const val = document.querySelector('input').value;

  zips.forEach((item, i) => {
    if (item == val) {
      finder = true
    }
  });

  if (finder == true) {
    alert("You're eligible!");
    window.location.href = "inperson.html";
  } else {
    alert("Fuck You");
    window.location.href = "signup.html";
  }
}
