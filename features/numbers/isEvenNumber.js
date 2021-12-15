function isEvenNumber(number) {

    if (!number) throw new Error('You must proivde an argument for the "isEvenNumber" function.')
    if (isNaN(number)) throw new Error('First argument passed is not a number.')
    

    if (number % 2 == 0) {
        return true
    } else {
        return false
    }
}

module.exports = isEvenNumber