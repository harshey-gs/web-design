function validateForm() {
  alert('im in validationfForm function')
  let val = true;
  let namevalue = document.formname.nameName.value;
  let numbervalue = 1234567890;
  let pass = 1;
  let pass2 = 2;
  let genderselected = document.querySelector('input[name="gender"]:checked')
  console.log('genderselected>>',genderselected )
  if (namevalue.length < 5) {
    alert("im in if condition")
    val = false;
  }
  if (numbervalue == 10) {
    val = false;
  }


  return val;
}

function resetForm() {
  document.formname.nameName.value = "empty"

}