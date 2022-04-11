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
    window.location.href = "https://calendly.com/johnwlgarza";
  } else {
    alert("You are no ellgible for in person, sorry for the inconvience. Try online!");
    window.location.href = "signup.html";
  }
}
