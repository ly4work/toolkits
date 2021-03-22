/**
 * is函数类型
 */
type IsType = (val: any) => boolean

/**
 * isNumber 是否Number
 * @param val any
 * @returns boolean
 * @author liyang
 * @date 2021/03/08
 */
export const isNumber: IsType = (val: any) => {
  return typeof val === 'number'
}

/**
 * isString 是否String
 * @param val any
 * @returns boolean
 * @author liyang
 * @date 2021/03/08
 */
export const isString: IsType = (val: any) => {
  return typeof val === 'string'
}

/**
 * isBoolean 是否Boolean
 * @param val any
 * @returns boolean
 * @author liyang
 * @date 2021/03/08
 */
export const isBoolean: IsType = (val: any) => {
  return typeof val === 'boolean'
}

/**
 * isNull 是否null
 * @param val any
 * @returns boolean
 * @author liyang
 * @date 2021/03/08
 */
export const isNull: IsType = (val: any) => {
  return !val && typeof (val) !== "undefined" && val !== 0 && typeof val !== 'string'
}

/**
 * isUndefined 是否undefined
 * @param val any
 * @returns boolean
 * @author liyang
 * @date 2021/03/08
 */
export const isUndefined: IsType = (val: any) => {
  return typeof val === "undefined"
}

/**
 * isFunction 是否Function
 * @param val any
 * @returns boolean
 * @author liyang
 * @date 2021/03/08
 */
export const isFunction: IsType = (val: any) => {
  return typeof val === "function"
}

/**
 * isObject 是否Object
 * @param val any
 * @returns boolean
 * @author liyang
 * @date 2021/03/08
 */
export const isObject: IsType = (val: any) => {
  return val && typeof val === 'object' && Object.prototype.toString.call(val).toLowerCase() === "[object object]";
}

/**
 * isArray 是否Object
 * @param val any
 * @returns boolean
 * @author liyang
 * @date 2021/03/08
 */
export const isArray: IsType = (val: any) => {
  return val && typeof val === 'object' && Object.prototype.toString.call(val).toLowerCase() === '[object array]';
}


export default {
  isNumber,
  isString,
  isBoolean,
  isNull,
  isUndefined,
  isFunction,
  isObject,
  isArray
}