//1. Membuat fungsi handleGetFormData
function handleGetFormData() {
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
    var zipCode = document.getElementById("zip-code").value;
    var status = document.getElementById("status").checked;

    return {
        name: name,
        city: city,
        email: email,
        zipCode: zipCode,
        status: status
    }
}

//2. Membuat fungsi isNumber
function isNumber(str) {
    return !isNaN(str);
}

//3. Membuat fungsi checkboxIsChecked
function checkboxIsChecked() {
    return document.getElementById("status").checked;
}

//4. Membuat fungsi validateFormData
function validateFormData(formData) {
    if (formData.name !== '' && formData.city !== '' && formData.email !== '' && isNumber(formData.zipCode) && checkboxIsChecked(formData)) {
        console.log('form terisi');
        return true;
    } else {
        console.log('tidak terisi');
        return false;
    }
}

//5. Membuat fungsi submitForm
function submit() {
    const formData = handleGetFormData();
    if (validateFormData(formData)) {
        document.getElementById('warning').textContent = "";
    } else {
        document.getElementById('warning').textContent = "Periksa form anda sekali lagi";
    }
}

document.querySelector('form').addEventListener("submit", event => {
    event.preventDefault();
    submit();
})