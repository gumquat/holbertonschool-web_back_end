export default class Airport {
  cosntructor (name, code) {
    if (typeof name !== 'string') {
      throw new TypeError ('Expected a string')
    }
    if (typeof code !== 'string') {
      throw new TypeError ('Expected string')
    }
    
    this._name = name;
    this._code = code;
  }

    toString() {
      return `[SFO] [object ${this._code}]`;
    }
}
