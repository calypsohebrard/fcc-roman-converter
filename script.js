const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanArray = [{key: "M", value: 1000 }, {key: "CM", value: 900}, {key: "D", value: 500}, {key: "CD", value: 400}, {key: "C", value: 100}, {key:"XC", value: 90}, {key:"L", value: 50}, {key: "XL", value: 40}, {key: "X", value: 10}, {key: "IX", value: 9}, {key:"V", value: 5}, {key: "IV", value: 4}, {key: "I", value: 1}];


const convertNumber = (input) => {
  let result = "";
  /* while(input !== 0) {
     if(input >= 1000) {
       input -= 1000;
       result += "M";
     } else if(input >= 900) {
       input -= 900;
       result += "CM";
     } else if()

   }*/
  while(input !== 0) {
    let romanObj = romanArray.find((element) => input >= element.value);
    input -= romanObj.value;
    result += romanObj.key;
  }
   return result;
}
const isError = (number) => {
  if(isNaN(number) && numberInput.value === "") {
    output.innerText = "Please enter a valid number";
    return true;
  }
  if(number <= -1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return true;
  }
  if(number >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return true;
  } 
   return false;
}

numberInput.addEventListener("keypress", (e) => {
   if(e.key == "Enter") {
      e.preventDefault();
      convertBtn.click();
   }
})


convertBtn.addEventListener("click", () => {
  const number = parseInt(numberInput.value);
  if(!isError(number)){
  output.innerText = convertNumber(number);
  }
  numberInput.value = "";
})
