export function safeRound(number: number, decimal = 2) {
    const roundedNumber = Number(Number(number).toFixed(decimal));
    return roundedNumber;
}