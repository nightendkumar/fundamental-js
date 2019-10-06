const Iterator = (function () {
    const values = [1, 2, 3, 4, 5, 7, 29, 32, 31, 63, 65];
    let index = 0;
    let addToValues = (value) => {
        values.push(value);
    }
    let hasNext = () => {
        return index < values.length;
    }
    let next = () => {
        return values[index++];
    }
    return {
        hasNext: hasNext,
        next: next,
        addToValues: addToValues
    }
})();

do {
    console.log(Iterator.next());
    // let randomNumber = Math.random() * 100;
    // if ((Math.floor(randomNumber) % 2) === 0) Iterator.addToValues(randomNumber);
} while (Iterator.hasNext())