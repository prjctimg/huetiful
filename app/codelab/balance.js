function createWeightedSelector(items) {
    const weightedArray = [];

    for (const item of items) {
        for (let i = 0; i < item.weight; i++) {
            weightedArray.push(item.value);
        }
    }

    return function () {
        return weightedArray[Math.floor(Math.random() * weightedArray.length)];
    };
}

const items = [
    {
        weight: 50,
        value: 'tomato'
    },
    {
        weight: 25,
        value: 'orange'
    }
];

const color = pickColor();

const pickColor = createWeightedSelector([
    {
        weight: 60, // 60% chance of being picked
        value: 'black'
    },
    {
        weight: 30, // 30% chance of being picked
        value: 'orange'
    },
    {
        weight: 10, // 10% chance of being picked
        value: 'tomato'
    }
]);
