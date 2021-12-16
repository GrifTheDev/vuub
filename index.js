// --- Sync ---

const subtractStringArrays = require("./utilities/synchronous/arrays/subtractStringArrays")
const getPrimeFactors = require("./utilities/synchronous/numbers/getPrimeFactors")
const isEvenNumber = require("./utilities/synchronous/numbers/isEvenNumber")
const generateRandomId = require("./utilities/synchronous/strings/generateRandomId")
const convertToUnixTimestamp = require("./utilities/synchronous/dates/convertToUnixTimestamp")


// --- Async ---

const subtractStringArraysAsync = require('./utilities/asynchronous/arrays/subtractStringArraysAsync')
const getPrimeFactorsAsync = require('./utilities/asynchronous/numbers/getPrimeFactorsAsync')
const isEvenNumberAsync = require('./utilities/asynchronous/numbers/isEvenNumberAsync')
const generateRandomIdAsync = require('./utilities/asynchronous/strings/generateRandomIdAsync')
const convertToUnixTimestampAsync = require('./utilities/asynchronous/dates/convertToUnixTimestampAsync')

module.exports = {
    isEvenNumber: isEvenNumber,
    getPrimeFactors: getPrimeFactors,
    subtractStringArrays: subtractStringArrays,
    subtractStringArraysAsync: subtractStringArraysAsync,
    getPrimeFactorsAsync: getPrimeFactorsAsync,
    isEvenNumberAsync: isEvenNumberAsync,
    generateRandomIdAsync: generateRandomIdAsync,
    generateRandomId: generateRandomId,
    convertToUnixTimestampAsync: convertToUnixTimestampAsync,
    convertToUnixTimestamp: convertToUnixTimestamp
}