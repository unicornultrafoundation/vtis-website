export function formatWithCommas(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!))/g, ',');
}