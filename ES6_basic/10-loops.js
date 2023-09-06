export default function appendToEachArrayValue(array, appendString) {
  
  const arrayHolder = [];

  for (let value of array) {
    const modValue = appendString + value;
    newArray.push(modValue);
  }

  return arrayHolder;
}
