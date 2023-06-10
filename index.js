const fieldName = document.getElementById("fieldName")
const fieldNameHint = document.getElementById("fieldNameHint")

function nameValidation(event) {
  if (event.target.value === "") {
    fieldNameHint.innerText = "Este campo é obrigatório."
    fieldNameHint.style.color = "red"
    return
  }

  if (event.target.value.length <= 3) {
    fieldNameHint.innerText = "Nome muito curto."
    fieldNameHint.style.color = "orange"
    return
  }

  fieldNameHint.innerText = "Nome válido."
  fieldNameHint.style.color = "green"
}

fieldName.oninput = nameValidation

const fieldPassword = document.getElementById("fieldPassword")
const fieldPasswordHint = document.getElementById("fieldPasswordHint")

function passwordValidation(event) {
  if (event.target.value === "") {
    fieldPasswordHint.innerText = "Este campo é obrigatório."
    fieldPasswordHint.style.color = "red"
    return
  }

  if (event.target.value.length <= 5) {
    fieldPasswordHint.innerText = "Senha muito fraca."
    fieldPasswordHint.style.color = "orange"
    return
  }

  fieldPasswordHint.innerText = "Senha ótima."
  fieldPasswordHint.style.color = "green"
}

fieldPassword.oninput = passwordValidation