export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._code = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Currency must be a currency');
    }
    this._currency = value;
  }

  displayFullCurrency() {
    return `${this._currency} (${this._amount})`;
  }
}
