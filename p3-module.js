function validDenomination(coin){
    coinValues = [1, 5, 10, 25, 50, 100]
    if (coinValues.indexOf(coin) !== -1){
        return true
    }
}
function valueFromCoinObject(obj){
    const {denom = 0, count = 0} = obj;
    return denom * count;
}
function valueFromArray(arr){
    const reducer = (accumulator, currentValue) => accumulator + valueFromCoinObject(currentValue);
    return arr.reduce(reducer, 0);
}
function coinCount(...coinage){
    return valueFromArray(coinage);
}
