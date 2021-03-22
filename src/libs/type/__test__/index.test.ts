const { isNumber, isString, isBoolean, isNull, isUndefined, isFunction, isObject, isArray } = require('./../index')

test('1 is number', () => {
    expect(isNumber(1)).toBe(true)
})

test('astr is string', () => {
    expect(isString('astr')).toBe(true)
})

test('false is boolean', () => {
    expect(isBoolean(false)).toBe(true)
})

test('null is null', () => {
    expect(isNull(null)).toBe(true)
})

test('void 0 is undefined', () => {
    expect(isUndefined(undefined)).toBe(true)
})

test('() => console.log(1) 0 is function', () => {
    expect(isFunction(() => console.log(1))).toBe(true)
})

test('{name: 1} is object', () => {
    expect(isObject({ name: 1 })).toBe(true)
})

test('[1,2] is array', () => {
    expect(isArray([1, 2])).toBe(true)
})