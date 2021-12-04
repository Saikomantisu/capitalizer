/**
 * 
 * @param { string } param0 
 * @returns string
 */
const capitalize = ([ first, ...rest ]) => {
    return first.toUpperCase() + rest.join('')
}

/**
 * 
 * @param { string } text 
 */
 const capitalizer = (text) => {
    const words = text.split(' ')
    const capText = []

    for ( const word of words ) {
        const capWord = capitalize(word)
        capText.push(capWord)
    }

    return capText.join(' ')
}

module.exports = capitalizer
