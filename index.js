// --- Sync ---

const subtractStringArrays = require("./utilities/synchronous/arrays/subtractStringArrays")
const getPrimeFactors = require("./utilities/synchronous/numbers/getPrimeFactors")
const isEvenNumber = require("./utilities/synchronous/numbers/isEvenNumber")


// --- Async ---

const subtractStringArraysAsync = require('./utilities/asynchronous/arrays/subtractStringArraysAsync')
const getPrimeFactorsAsync = require('./utilities/asynchronous/numbers/getPrimeFactorsAsync')
const isEvenNumberAsync = require('./utilities/asynchronous/numbers/isEvenNumberAsync')
const generateRandomIdAsync = require('./utilities/asynchronous/strings/generateRandomIdAsync')

module.exports = {
    isEvenNumber: isEvenNumber,
    getPrimeFactors: getPrimeFactors,
    subtractStringArrays: subtractStringArrays,
    subtractStringArraysAsync: subtractStringArraysAsync,
    getPrimeFactorsAsync: getPrimeFactorsAsync,
    isEvenNumberAsync: isEvenNumberAsync,
    generateRandomIdAsync: generateRandomIdAsync
}