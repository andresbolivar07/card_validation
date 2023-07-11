const validator = {
  isValid(number){
    const arrayCard = number.split("").reverse().join(", ")
    console.log(arrayCard);
    return true;
  }
};

export default validator;
