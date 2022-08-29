
const randomNumArray = (number) => {
    let arr = [];

    while (arr.length < number) {
        const r = Math.floor(Math.random() * 7) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    return arr;
}

module.exports = randomNumArray;