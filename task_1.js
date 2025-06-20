
//Task 1: Flexible String Manipulation with Functions

function formatFullName(firstName, lastName) {

    if(lastName === "" || firstName === "" || lastName === undefined || firstName === undefined) { //returns error for user's improper entry of name
        
        return `Invalid name input.`

    } else {  //assuming name was properly entered by user, the following formatting actions will take place

        let first_name_letters = [] //will store letters from first name
        let last_name_letters = [] //will store letters from second name
        let formatted_first_name = ""
        let formatted_last_name = ""

        //populate array with letters from first name
        for(let i = 0; i < firstName.length; i++) {
            first_name_letters.push(firstName.charAt(i))
        }

        //populate array with letters from last name
        for(let i = 0; i < lastName.length; i++) {
            last_name_letters.push(lastName.charAt(i))
        }

        //formats letters of first name array with correct capitalization
        for(let i = 0; i < first_name_letters.length; i++) {

            if(i === 0) {
                first_name_letters[i] = first_name_letters[i].toUpperCase()
            } else {
                first_name_letters[i] = first_name_letters[i].toLowerCase()
            }

        }

        //formats letters of last name array with correct capitalization
        for(let i = 0; i < last_name_letters.length; i++) {

            if(i === 0) {
                last_name_letters[i] = last_name_letters[i].toUpperCase()
            } else {
                last_name_letters[i] = last_name_letters[i].toLowerCase()
            }

        }

        //populate first name string with now-corrected capitalization
        for(let letter of first_name_letters) {
            formatted_first_name += letter
        }

        //populate last name string with now-corrected capitalization
        for(let letter of last_name_letters) {
            formatted_last_name += letter
        }

        let full_name = formatted_last_name + ", " + formatted_first_name

        return full_name

    }
}

let my_first_name = "Juan"
let my_last_name = "Gomez"
let incorrect_first_name = "juan"
let incorrect_last_name = "gomez"

console.log(`\nTests for assignment:\n`)

console.log(formatFullName(my_first_name, my_last_name)) //scenario: user inputs name correctly
console.log(formatFullName(my_first_name, "")) //scenario: user inputs last name as empty string
console.log(formatFullName("", my_last_name)) //scenario: user inputs first name as empty string
console.log(formatFullName(my_first_name)) //scenario: user forgets to input last name
console.log(formatFullName(my_last_name)) //scenario: user forgets to input first name
console.log(formatFullName()) //scenario: user forgets to input their name
console.log(formatFullName(incorrect_first_name, my_last_name)) //scenario: first name inputted as all lowercase, proper last name input
console.log(formatFullName(my_first_name, incorrect_last_name)) //scenario: proper first name input, last name inputted as all lowercase
console.log(formatFullName(incorrect_first_name, incorrect_last_name)) //scenario: both first name and last name are inputted in all lowercase

//extra
let wrong_first_name = "jUaN"
let wrong_last_name = "gOmEz"

console.log(`\n------------------------------------------------`)
console.log(`\nThe following are tested for my own curiosity:\n`)

console.log(formatFullName(wrong_first_name, wrong_last_name)) //scenario: mixed capitalization on first name, mixed capitalization on last name
console.log(formatFullName(wrong_first_name, my_last_name)) //scenario: mixed capitalization on first name, correct capitalization on last name
console.log(formatFullName(my_first_name, wrong_last_name)) //scenario: correct capitalization on first name, mixed capitalization on last name
console.log(formatFullName(wrong_first_name, incorrect_last_name)) //scenario: mixed capitalization on first name, last name all lowercase
console.log(formatFullName(incorrect_first_name, wrong_last_name)) //scenario: first name all lower case, mixed capitalization on last name

//there was definitely a prettier way to solve this task
//#forloopsforlife
