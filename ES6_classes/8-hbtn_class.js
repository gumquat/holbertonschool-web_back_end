export default class HolbertonClass {
  constructor (size, location) {
    if (typeof size !== 'number') {
      throw new TypeError ('Expected a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError ('Expected string');
    }

    this._size = size;
    this._location = location;
  }
  
}
