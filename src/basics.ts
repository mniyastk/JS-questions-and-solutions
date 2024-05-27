
/*
1. Create a function that takes a string and returns the number (count) of vowels contained    within it. 
 Examples :- 	countVowels("Celebration") ➞ 5 
 
countVowels("Palm") ➞ 1 

countVowels("Prediction") ➞ 4 



Note:- a , e , i, o, u are considered vowels (not y). 

*/

function countVowels(str:string){
    const characters = str.split('')
    let vowels = "aeiou"
    let vowelsCount :number=0
    characters.forEach(item=>{
        if(vowels.includes(item)){
            vowelsCount++
        }
    })
    return vowelsCount
}

console.log(countVowels("Palm") )
console.log(countVowels("Prediction") )

