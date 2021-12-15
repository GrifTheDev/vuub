function generateRandomId(length) {

    if (!length) throw new Error('The length of the random ID was not provided when calling the "generateRandomId" function.')
    if (length >= 200000) {
        console.log('[vuub] (Warn) :: It is not recommended to request IDs longer or equal to 200,000 characters. Preformance issues should be expected. ID generation will continue in 5 seconds.')
    }
    
    

    var usable_characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var random_id = '';

    for (var i = 0; i < length; i++) {
        random_id += usable_characters.charAt(Math.floor(Math.random() * usable_characters.length));
    }

    return random_id
}

module.exports = generateRandomId