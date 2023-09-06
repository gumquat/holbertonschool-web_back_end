export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const value of array) {
    const modifiedValue = appendString + value;
    newArray.push(modifiedValue);
  }

  return newArray;
}
