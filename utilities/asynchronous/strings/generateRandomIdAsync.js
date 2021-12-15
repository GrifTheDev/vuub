async function generateRandomIdAsync(length) {

    if (!length) throw new Error('The length of the random ID was not provided when calling the "generateRandomId" function.')

    var usable_characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var random_id = '';

    for (var i = 0; i < length; i++) {
        random_id += usable_characters.charAt(Math.floor(Math.random() * usable_characters.length));
    }

    return random_id


}

module.exports = generateRandomIdAsync