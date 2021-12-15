async function isEvenNumberAsync(number) {

    if (!number) throw new Error('You must proivde an argument for the "isEvenNumber" function.')
    if (isNaN(number)) throw new Error('The first argument passed into the "isEvenNumber" function is not a number.')
    

    if (number % 2 == 0) {
        return true
    } else {
        return false
    }
}

module.exports = isEvenNumberAsync