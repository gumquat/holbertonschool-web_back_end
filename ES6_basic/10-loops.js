export default function appendToEachArrayValue(array, appendString) {
  for (let i in array) {
    array[i] = appendString + array[i];
  }

  return array;
}
