window.generatePassword = function() {
  const form = document.getElementById("lp-form");
  const formData = new FormData(form);

  const options = {
    length: formData.get("length"),
    counter: formData.get("number")
  };

  Array.from(formData.getAll("rules[]")).forEach((v) => options[v] = true);

  return lesspass.generatePassword(
    formData.get("context"),
    formData.get("identifier"),
    formData.get("masterpassword"),
    options
  ).then((result) => {
    form.elements["result"].value = result;

    return Promise.resolve({ value: result, form: form});
  });
}

window.generateAndCopyPassword = function() {
  generatePassword().then((result) => {
    copyPasswordToClipboard(result.form.elements["result"]);
  });
}

// iOS needs the value from some input element, and outside of
// a Promise resolution. Otherwise, the clipboard remains unchanged.
window.clipboardAndClear = function() {
  const form = document.getElementById("lp-form");
  copyPasswordToClipboard(form.elements["result"]);
  form.reset();
}

window.clearForm = function() {
  const form = document.getElementById("lp-form");
  form.reset();
}

window.copyPasswordToClipboard = function(passwordContainer) {
  const range = document.createRange();
  const selection = window.getSelection();

  passwordContainer.select();

  range.selectNodeContents(passwordContainer);
  selection.removeAllRanges();
  selection.addRange(range);

  passwordContainer.readOnly = false;
  passwordContainer.contentEditable = true;
  passwordContainer.setSelectionRange(0, 256);
  passwordContainer.readOnly = true;
  passwordContainer.contentEditable = false;

  document.execCommand("copy");

  passwordContainer.value = "(in clipboard)";
}

window.updateChecksum = function() {
  const form = document.getElementById("lp-form");
  const formData = new FormData(form);
  const renderField = form.getElementsByClassName("lp-mp-render")[0];

  lesspass.createFingerprint(formData.get("masterpassword")).then((result) => {
    renderField.innerHTML = "";
    result.forEach((f) => {
      const elem = document.createElement("span");
      elem.innerHTML = f.icon + " ";
      elem.style.color = f.color;
      renderField.appendChild(elem);
    });
  });
}
