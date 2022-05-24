const objectToString = Object.prototype.toString
const toTypeString = value => objectToString.call(value)
const hasOwnProperty = Object.prototype.hasOwnProperty

export const Type = {
  hasOwn(val, key) {
    return hasOwnProperty.call(val, key)
  },
  isArray(obj) {
    return Array.isArray(obj)
  },
  isMap(val) {
    return toTypeString(val) === '[object Map]'
  },
  isSet(val) {
    return toTypeString(val) === '[object Set]'
  },
  isDate(val) {
    return val instanceof Date
  },
  isFunction(val) {
    return typeof val === 'function'
  },
  isString(val) {
    return typeof val === 'string'
  },
  isSymbol(val) {
    return typeof val === 'symbol'
  },
  isObject(val) {
    return val !== null && typeof val === 'object'
  },
  isPromise(val) {
    return this.isObject(val) && this.isFunction(val.then) && this.isFunction(val.catch)
  },
}
