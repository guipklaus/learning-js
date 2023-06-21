const isValid = {
  name: false,
  password: false,
}

function updateButtonStatus(field, valid) {
  isValid[field] = valid
  createAccountButton.disabled = !(isValid.name && isValid.password)
}

function setFieldHint(element, message, color) {
  element.innerText = message
  element.style.color = color
}

function setFieldNameHint(message, color) {
  setFieldHint(fieldNameHint, message, color)
}

function setFieldPasswordHint(message, color) {
  setFieldHint(fieldPasswordHint, message, color)
}

const fieldName = document.getElementById("fieldName")
const fieldNameHint = document.getElementById("fieldNameHint")

function nameValidation(event) {
  if (event.target.value === "") {
    setFieldNameHint("Este campo é obrigatório.", "red")
    updateButtonStatus("name", false)
    return
  }

  if (event.target.value.length <= 3) {
    setFieldNameHint("Nome muito curto.", "orange")
    updateButtonStatus("name", false)
    return
  }

  if (event.target.value.length === 20) {
    setFieldNameHint("Tamanho máximo.", "red")
    updateButtonStatus("name", false)
    return
  }

  setFieldNameHint("Nome válido.", "green")
  updateButtonStatus("name", true)
}

fieldName.oninput = nameValidation

const fieldPassword = document.getElementById("fieldPassword")
const fieldPasswordHint = document.getElementById("fieldPasswordHint")

function passwordValidation(event) {
  if (event.target.value === "") {
    setFieldPasswordHint("Este campo é obrigatório.", "red")
    updateButtonStatus("password", false)
    return
  }

  if (event.target.value.length <= 5) {
    setFieldPasswordHint("Senha muito fraca.", "orange")
    updateButtonStatus("password", false)
    return
  }

  setFieldPasswordHint("Senha ótima.", "green")
  updateButtonStatus("password", true)
}

fieldPassword.oninput = passwordValidation

const createAccountButton = document.getElementById("createAccountButton")

function createAccount() {
  console.log("createAccount")
}

createAccountButton.onclick = createAccount
