import validator from './validator.js';

const getCardNumber = () => {

    const cardNumber = document.getElementById("cardCreditNumber").value;
    const result = validator.isValid(cardNumber);
    const maskify = validator.maskify(cardNumber);
    const trueResponse = "La tarjeta es válida";
    const falseResponse = "La tarjeta no es válida";

    document.getElementById("cardCreditNumber").value = maskify;
    const validateCheck = document.getElementById("response")
    validateCheck.innerHTML = result ? trueResponse : falseResponse;
}

const btnCardValidate = document.getElementById("btnValidate");

btnCardValidate.addEventListener("click", getCardNumber)


