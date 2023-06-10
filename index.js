const fieldName = document.getElementById("fieldName")
const fieldNameError = document.getElementById("fieldNameError")

function nameValidation(event) {
  if (event.target.value === "") {
    fieldNameError.innerText = "Este campo é obrigatório."
    fieldNameError.style.color = "red"
    return
  }

  if (event.target.value.length <= 3) {
    fieldNameError.innerText = "Nome muito curto."
    fieldNameError.style.color = "orange"
    return
  }

  fieldNameError.innerText = "Nome válido."
  fieldNameError.style.color = "green"
}

fieldName.oninput = nameValidation