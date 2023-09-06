export default function appendToEachArrayValue(array, appendString) {
  for (value of array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
