export const rollInit = (modifier) => {
    const diceRoll = Math.floor(Math.random() * 20) + 1;
    if(Number.isInteger(eval(modifier))) {
        return diceRoll + eval(modifier);
    }
    return diceRoll;
}