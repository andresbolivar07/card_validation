const validator = {
  isValid(number){
    const arrayCard = number.split("").reverse().join("");

    let arrFilter = [];
    let arrFilterOdd = [];

    for (let i = 1; i < arrayCard.length; i += 2) {
      arrFilter.push(arrayCard[i]);
    }
    for (let i = 0; i < arrayCard.length; i += 2) {
      arrFilterOdd.push(parseInt(arrayCard[i]))
    }

    let arrFilterPair = [];
    let counter = 0;

    for (let i = 0; i < arrFilter.length; i++) {
      counter = arrFilter[i] * 2;
      if (counter > 9) {

        let secondDigit = counter % 10;
        let firstDigit = parseInt(counter / 10);
        let result = secondDigit + firstDigit;
        arrFilterPair.push(result);
    }else{
      arrFilterPair.push(counter);
    }
  }

  const arrNumbers = [...arrFilterOdd, ...arrFilterPair];
        let sums = 0;
        for (let i = 0; i < arrNumbers.length; i++) {
            sums += arrNumbers[i];
        }        
          return sums % 10 === 0 ;
      }
    }

export default validator;

