
//Task 2: Mathematical Operations with Multiple Parameters

function calculateTotalCost(price, quantity, taxRate) {

    if(typeof price !== "number" || typeof quantity !== "number" || typeof taxRate !== "number") {
        return "Invalid input"
    }

    if(price < 0 || quantity < 0) {
        return "Invalid input for price or quantity" //can't have a negative price or quantity in this context!
    }

    if(taxRate < 0 || taxRate > 1) {
        return "Invalid input. Tax rate must be entered as a decimal between 0 and 1."
    }

    let totalCost = (price * quantity) * (1 + taxRate)
    let roundedtotalCost = totalCost.toFixed(2)

    return roundedtotalCost
}

console.log(calculateTotalCost(28, 3, .08)) //all parameters properly inputted
console.log(calculateTotalCost("twenty-eight", 3, .08)) //one string inputted
console.log(calculateTotalCost(28, false, .08)) //one boolean inputted
console.log(calculateTotalCost(-28, 3, .08)) //negative price inputted
console.log(calculateTotalCost(28, 3, 8)) //tax greater than 1 inputted
console.log(calculateTotalCost(28, 3, -8)) //negative tax inputted