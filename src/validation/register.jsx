export const validate = (state) => {
  const nameRegex = /^[a-zA-Z ]+$/
  const emailRegex = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
  const usernameRegex = /^[a-zA-Z0-9]{3,18}$/
  const mobileRegex = /^(\+91-)[6-9]\d{9}$/
  const dateRegex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/
  const passwordRegex = /^[a-zA-Z0-9]{8,12}$/

  const errors = {
    nameError: "",
    emailError: "",
    usernameError: "",
    mobileError: "",
    dateError: "",
    passwordError: "",
    confirmError: ""
  };

  if (state.name === "") {
    errors.name = "Name is required"
  }
  else if (!nameRegex.test(state.name)) {
    errors.name = "Name should contain only alphabets"
  }
  if (state.email === "") {
    errors.email = "Email is required"
  }
  else if (!emailRegex.test(state.email)) {
    errors.email = "Email should be valid.Eg:gopiya000@gmail.com"
  }
  if (state.username === "") {
    errors.username = "Username is required"
  }
  else if (!usernameRegex.test(state.username)) {
    errors.username = "Username must has minimum 3 and maximum 18 characters"
  }
  if (state.mobile === "") {
    errors.mobile = "Mobile number is required"
  }
  else if (!mobileRegex.test(state.mobile)) {
    errors.mobile = "Mobile number should contain 10 digit number along with +91(Eg:+91-9876543212)"
  }
  if (state.date === "") {
    errors.date = "DOB is required"
  }
  else if (!dateRegex.test(state.date)) {
    errors.date = "The date should be in this format DD/MM/YYYY"
  }
  if (state.password === "") {
    errors.password = "Password is required"
  }
  else if (!passwordRegex.test(state.password)) {
    errors.password = "Password length should be minimum 8 and maximum 12"
  }
  if (state.confirm === "") {
    errors.confirm = "Confirm password is required."
  }
  else if (state.password != state.confirm) {
    errors.confirm = "Password and confirm password should be same."
  }
  else {
    console.log("false");
  }
  if (
    errors.nameError ||
    errors.emailError ||
    errors.usernameError ||
    errors.mobileError ||
    errors.dateError ||
    errors.passwordError ||
    errors.confirmError
  ) {
    return errors
  }
  return true
}