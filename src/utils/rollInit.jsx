export const rollInit = (modifier) => {
    console.log("Initiative Modifier: " + modifier);
    const diceRoll = Math.floor(Math.random() * 20) + 1;
    console.log("Dice Roll: " + diceRoll);
    if(Number.isInteger(eval(modifier))) {
        return diceRoll + eval(modifier);
    }
    return diceRoll;
}