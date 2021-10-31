const div = (a, b) => {

    if (typeof a !== 'number' || typeof b !== 'number' || b === 0) {
        return false;
    }

    return (a / b);
}

module.exports = div;