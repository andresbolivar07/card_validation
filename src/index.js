import validator from './validator.js';




const getCardNumber = () => {

    const cardNumber = document.getElementById("cardCreditNumber").value;
    const result = validator.isValid(cardNumber);
    const trueResponse = "La tarjeta es válida";
    const falseResponse = "La tarjeta no es válida";

    console.log(cardNumber);

    const validateCheck = document.getElementById("response")
    validateCheck.innerHTML = result ? trueResponse : falseResponse;
}

const btnCardValidate = document.getElementById("btnValidate");

btnCardValidate.addEventListener("click", getCardNumber)


