
//Task 4: Refactoring for Reusability

function calculateTotalCost(price, quantity, taxRate, discount=0) {

    if(typeof price !== "number" || typeof quantity !== "number" || typeof taxRate !== "number") {
        return "Invalid input"
    }

    if(price < 0 || quantity < 0) {
        return "Invalid input" //can't have a negative price in this context!
    }

    if(taxRate < 0 || taxRate > 1) {
        return "Invalid input. Tax rate must be entered as a decimal between 0 and 1."
    }

    if(discount) {
        if(discount < 0 || discount > 1) {
            return "Invalid input. Discount must be entered as a decimal between 0 and 1."
        } else {
            let totalCost = ((price * quantity) - (price * quantity * discount)) * (1 + taxRate)
            let roundedtotalCost = totalCost.toFixed(2)
            
            return roundedtotalCost
        }
    }
    let totalCost = (price * quantity) * (1 + taxRate)
    let roundedtotalCost = totalCost.toFixed(2)

    return roundedtotalCost

}

console.log(calculateTotalCost(28, 3, .08)) // no discount inputted
console.log(calculateTotalCost(28, 3, .08, 0)) //discount of 0 inputted
console.log(calculateTotalCost(28, 3, .08, -.05)) //discount is inputted as negative (invalid input)
console.log(calculateTotalCost(28, 3, .08, 1.15)) //discount is inputted as greater than 1 (invalid input)
console.log(calculateTotalCost(28, 3, .08, .15)) //proper input including discount
