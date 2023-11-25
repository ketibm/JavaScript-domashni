function registrationUserForm() {
  let fname = document.forms["regForm"]["fname"].value;
  let lname = document.forms["regForm"]["lname"].value;
  let email = document.forms["regForm"]["email"].value;
  let password = document.forms["regForm"]["password"].value;
  let cpassword = document.forms["regForm"]["cpassword"].value;
  if (password === cpassword) {
    alert(
      "Registration Successful! Welcome, " +
        fname +
        " " +
        lname +
        ". Your email is " +
        email
    );
  } else {
    alert("Passwords do not match. Please try again.");
  }
}
