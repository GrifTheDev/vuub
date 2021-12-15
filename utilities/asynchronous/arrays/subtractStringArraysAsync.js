async function subtractStringArraysAsync(firstArray, secondArray) {

    if (!firstArray || !secondArray) throw new Error('You must provide two arrays for the "subtractStringArrays" function.')
    if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) throw new Error(`One or two of the arguments provided for the "subtractStringArrays" function aren't an Array.`)

    for (const data of firstArray) {
        if (typeof data != 'string') throw new Error('The first specified array for the "subtractStringArrays" function, contains a variable that is not a string.')
    }

    for (const data of secondArray) {
        if (typeof data != 'string') throw new Error('The second specified array for the "subtractStringArrays" function, contains a variable that is not a string.')
    }

    for (const item of firstArray) {

        if (secondArray.includes(item)) {

            secondArray.splice(secondArray.indexOf(item), 1) // Splice removes one element from the Array, we use Array.indexOf(item) to return the number of the item needed to be removed in the array.
            firstArray.splice(firstArray.indexOf(item), 1)

        }
    }

    finalArray = secondArray.concat(firstArray)

    return finalArray

}

module.exports = subtractStringArraysAsync