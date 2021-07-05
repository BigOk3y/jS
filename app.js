
console.log("Another thing");
console.log("Anything");


let position = "1";

console.log(position);
console.log(typeof position);
let number = 1;
console.log(number);
console.log(typeof number);

let value = null;
const date = new Date();


console.log(value);
console.log(date);



const name = "okey"
const age = 24
const profession = "Developer"

const all = `My name is ${name}, I am ${age} years old. I am ${profession}`

console.log(all);

//Equality check
const check = "5" == 5;
const check2 = "5" === 5;
const check3 = "5" != 5;
const check4 = "5" !== 5;

console.log(check);
console.log(check2);
console.log(check3);
console.log(check4);

//IF Statements
const First_name = "Frank";

if (First_name === "Frank") {
    console.log(`His name is${First_name}`);
}

const language = "Javascript";

if (language === "Javascript") {
    console.log(language);
}

if (language === "Frank" && First_name === "Javascript") {
    console.log("Third condition");
}

if (language === "Frank" || First_name === "Frank") {
    console.log("or condition");
}


//ELSE STATEMENT
const institution = "Projaro";
const President = "Buhari";
const year = 2020;
const years= "2020";

if (years == 2020) {
    console.log("1st If statement");
} else {
    console.log(President);
}

if (institution !== "Projaro") {
 console.log(institution);
} else {
    console.log(year)
}
if (President == "Buhari") {
    console.log(`The president of Nigeria is ${President}`);
   } else {
       console.log("Our Last Condition")
   }
   
   //TERNARY OPERATOR
   const number2 = 10;
   const myName = "Chinedu";

   const FirstCheck = number2 > 10 ? true  : false;
   const result = typeof myName === "boolean" ? "Yes" : "No";

   console.log(FirstCheck);
   console.log(result);

    const Yr = years == 2020 ? "1st If statement" : President;
    const Yr1 = institution !== "Projaro" ? institution : year;
    const Yr2 = President == "Buhari" ? `The president of Nigeria is ${President}` : "Our Last Condition";

    console.log(Yr)
    console.log(Yr1)
    console.log(Yr2)

    // switch (myName) {
    //  case "chinedu" :
    //      console.log("chinex Man");
    //      break;
    //      default:
    //          console.log("Jesus Christ")

    // }

    const fruits = "Apples";

    switch (fruits) {
        case "Banana" :
            console.log("Banana");
        case "Oranges":
            console.log("Oranges");
        default:
            console.log("Everything else failed")
    }



    /**
     * Grading scores of a course
     * A is 74 to 100
     * B is 60 to 74
     * C is 50 to 69
     * D is 40 to 49
     * F is below 40
     * Anything else "Invalid Score"
     */