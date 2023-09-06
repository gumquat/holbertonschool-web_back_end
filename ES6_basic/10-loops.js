export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
