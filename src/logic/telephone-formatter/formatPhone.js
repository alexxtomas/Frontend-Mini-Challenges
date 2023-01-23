export function getOnlyNumbersFor(string) {
  return [...string]
    .filter((character) => Number.isInteger(+character) && character !== ' ')
    .join('')
}

export function formatNumber(string) {
  const onlyNumbers = getOnlyNumbersFor(string)
  return onlyNumbers.length > 3
    ? `+(${onlyNumbers.slice(0, 3)}) - ${onlyNumbers.slice(3)}`
    : onlyNumbers
}
