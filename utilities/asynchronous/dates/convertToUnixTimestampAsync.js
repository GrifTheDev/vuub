async function convertToUnixTimestampAsync (dateObject) {

    if (!dateObject) throw new Error('No date variable provided for the "convertToUnixTimestamp" function.')
    if (Object.prototype.toString.call(dateObject) !== '[object Number]') throw new Error('Provided variable for the "convertToUnixTimestamp" function is not a Numbered Date. You can use a "Date.now()" function with or without a variable, and pass it into the "convertToUnixTimestamp" function. You can also use the "new Date().getTime()" function.') // Looking at the "blueprint" of this type of data structure and seeing if it is an ovect with a date property.
    
    var unixTimetamp = Math.floor(dateObject / 1000)

    return unixTimetamp

}


module.exports = convertToUnixTimestampAsync