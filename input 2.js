const input = (name = 'Unknown') => {
    if (name === '') {
        return 'Unknown'
    }

    name = name.split(' ').join('')

    if (name.match(/^\_+|\_+$/)) {
        name = name.replace(/^\_+|\_+$/, '')
    }

    if (name.length > 10) {
        name = name.substring(0, 10)
    }

    if (name === 'hell') {
        throw Error('This name not Allowed')
    }
    return name
}

module.exports = input