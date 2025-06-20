
//Task 3: Functions with Conditional Logic

//in this task, I assume the user always correctly inputs the second parameter (isEmployed) as a string

function checkEligibility(age, isEmployed) {

    let acceptable_terms = [
        'employed', 
        'Employed', 
        'EMPLOYED', 
        'unemployed', 
        'Unemployed', 
        'UNEMPLOYED', 
        'yes', 
        'no', 
        'Yes', 
        'No', 
        'YES',
        'NO'
    ]
    
    let employed_terms = [
        'employed',
        'Employed',
        'EMPLOYED',
        'yes',
        'Yes',
        'YES'
    ]

    let unemployed_terms = [
        'unemployed',
        'Unemployed',
        'UNEMPLOYED',
        'no',
        'No',
        'NO'
    ]
    
    if(typeof age !== "number") {
        return "Please input a number for age.\n"
    }

    if(age < 0 || age > 125) {
        return `Please enter a valid number for age.\n`
    }

    if(age <= 18) {
        return `Sorry, you must be older than 18 years to be eligible for this program.\n`
    }

    if(!(acceptable_terms.includes(isEmployed))) {
        return `Invalid input for employment status. Note, valid inputs include: ${acceptable_terms}\n`
    }

    if(employed_terms.includes(isEmployed) && age > 18) {
        return `Congratulations! You are eligible for this program.\n`
    }

    if(unemployed_terms.includes(isEmployed) && age > 18) {
        return `You are CONDITIONALLY eligible for this program. Please see our terms and conditions for more details.\n`
    }

}

console.log(checkEligibility(-5, "unemployed")) //scenario: user input a negative age
console.log(checkEligibility(1834232, "employed")) //scenario: user inputs an age older than 125
console.log(checkEligibility(17, "Employed")) //scenario: user input an age equal or younger than 18
console.log(checkEligibility(27, "employed")) //scenario: user matches eligible criteria
console.log(checkEligibility("Twenty-seven", "employed")) //scenario: user inputs a string-type for age
console.log(checkEligibility(45, "not employed")) //scenario: user enters an invalid term for employment status, and returns a list of acceptable terms
console.log(checkEligibility(45, "unemployed")) //scenario: previous user re-inputs their info with acceptable term; user matches criteria for conditional eligibility