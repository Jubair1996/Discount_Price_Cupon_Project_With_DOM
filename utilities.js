function getInputValueById(inputId) {
  const inputFieldValueId = document.getElementById(inputId);
  const inputFieldValueString = inputFieldValueId.value;
  const inputFieldValue = parseInt(inputFieldValueString);
  inputFieldValueId.value = "";
  return inputFieldValue;
}
