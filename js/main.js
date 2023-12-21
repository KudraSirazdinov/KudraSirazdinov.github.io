let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let tema = document.getElementById("tema");

    if (tema.getAttribute("href") == "css/light-mode.css") {
        tema.href = "css/dark-mode.css";
    } else {
        tema.href = "css/light-mode.css";
    }
}       

function validation(form) {
    let result = true;
    return result
}
document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault()
    if (validation(this) == true) {
        alert('Форма проверена успешно!')
    }
})

