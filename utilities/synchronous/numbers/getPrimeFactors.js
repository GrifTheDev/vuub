function getPrimeFactors(number) {

    if (!number) throw new Error('You must proivde an argument for the "getPrimeFactors" function.')
    if (isNaN(number)) throw new Error('The first argument passed into the "getPrimeFactors" function is not a number.')

    let factors = []
    let toDivide = 2

    while (number >= 2) {
        if (number % toDivide == 0) {
            factors.push(toDivide)
            number = number / toDivide
        } else {
            toDivide++
        }
    }

    if (factors.length == 1) {
        factors.push(1)
    }

    return factors

}

module.exports = getPrimeFactors