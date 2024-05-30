/*
1. Create a function that takes a string and returns the number (count) of vowels contained    within it. 
 Examples :- 	countVowels("Celebration") ➞ 5 
 
countVowels("Palm") ➞ 1 

countVowels("Prediction") ➞ 4 



Note:- a , e , i, o, u are considered vowels (not y). 

*/

function countVowels(str: string) {
  const characters = str.split("");
  let vowels = "aeiou";
  let vowelsCount: number = 0;
  characters.forEach((item) => {
    if (vowels.includes(item)) {
      vowelsCount++;
    }
  });
  return vowelsCount;
}

// console.log(countVowels("Palm") )
// console.log(countVowels("Prediction") )

/* -------------------------------------------------------------------
2. Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa. 

 

Examples :-	 reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY" 
 
		reverseCase("MANY THANKS") ➞ "many thanks" 
 
		reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS" 

--------------------------------------------------------------------------------------------*/

function reverseCase(str: string) {
  let characters = str.split("");
  let result: string[] = [];
  characters.forEach((element) => {
    if (element.toUpperCase() === element) {
      result.push(element.toLowerCase());
    } else if (element.toLowerCase() === element) {
      result.push(element.toUpperCase());
    }
  });
  return result.join("");
}

// console.log(reverseCase("Happy Birthday"))
// console.log(reverseCase("sPoNtAnEoUs"))
// console.log(reverseCase("MANY THANKS"))

/* 
3. Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed. 

 

Examples :-     spelling("bee") ➞ ["b", "be", "bee"] 
 
		spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"] 
 
		spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager","eagerl","eagerly"] 
*/

function spelling(word: String) {
  const characters = word.split("");
  let result: String [] = [];
  for (let i = 0; i < characters.length; i++) {
    result.push(word.slice(0, i + 1));
  }
  return result
}

console.log(spelling("eagerly"))
// console.log(spelling("bee"))
// console.log(spelling("happy"))
