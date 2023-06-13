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
    return
  }

  if (event.target.value.length <= 3) {
    setFieldNameHint("Nome muito curto.", "orange")
    return
  }

  if (event.target.value.length === 20) {
    setFieldNameHint("Tamanho máximo.", "red")
    return
  }

  setFieldNameHint("Nome válido.", "green")
}

fieldName.oninput = nameValidation

const fieldPassword = document.getElementById("fieldPassword")
const fieldPasswordHint = document.getElementById("fieldPasswordHint")

function passwordValidation(event) {
  if (event.target.value === "") {
    setFieldPasswordHint("Este campo é obrigatório.", "red")
    return
  }

  if (event.target.value.length <= 5) {
    setFieldPasswordHint("Senha muito fraca.", "orange")
    return
  }

  setFieldPasswordHint("Senha ótima.", "green")
}

fieldPassword.oninput = passwordValidation

const loginButton = document.getElementById("loginButton")

function login() {
  console.log("login")
}

loginButton.onclick = login

