const arr = require('../all')

describe.skip('Checking by using jest with native code', () => {
    test('If the array have 6 elements 1st method', () => {
        expect(arr.length).toBe(6)
    })

    test('If the array have 6 elements 2nd method', () => {
        expect(arr).toHaveLength(6)
    })

    test('If array contain number 6', () => {
        expect(arr).toContain(6)
    })

    /*
     you can use '.not' before methods like '.toHaveLength' or '.toContain'
    */
    test('If array not contain number 7', () => {
        expect(arr).not.toContain(7)
    })

    test('If array not contain number 8', () => {
        for (let i = 0; i < arr.length; i++) {
            expect(arr[i]).not.toBe(8)
        }
    })
})

describe.skip("Trying '.toBeTruthy' and '.ToBeFalsy'", () => {
    test('If array not contain a char', () => {
        for (let i = 0; i < arr.length; i++) {
            expect(isNaN(arr[i])).toBe(false)
        }
    })

    test('If array not contain a char', () => {
        for (let i = 0; i < arr.length; i++) {
            expect(isNaN(arr[i])).toBeFalsy()
        }
    })

    test('If array not contain a char', () => {
        for (let i = 0; i < arr.length; i++) {
            expect(isNaN(arr[i])).not.toBeTruthy()
        }
    })
})
describe.skip("> OR <", () => {
    test('Check if an element more than 1', () => {
        expect(arr[1]).toBeGreaterThan(1)
    })
    test('Check if an element more than or equal 1', () => {
        expect(arr[0]).toBeGreaterThanOrEqual(1)
    })
    test('Check if an element less than 1', () => {
        expect(arr[0]).toBeLessThan(2)
    })
    test('Check if first element less than or equal 1', () => {
        expect(arr[0]).toBeLessThanOrEqual(1)
    })
})

describe.skip('Trying some Matchers', () => {
    test('Check for Undefined', () => {
        let a
        expect(a).toBeUndefined()
    })

    test('Check for Substring Inside String by RegExp', () => {
        let string = 'I Love Elzero'
        expect(string).toMatch(/Elzero/ig)
    })

    test('Check on Object if Have Property age', () => {
        let myObject = {
            name: 'Elzero',
            age: 27
        }
        expect(myObject).toHaveProperty("age")
    })

    test('Check on Object if Have Property age with value 27', () => {
        let myObject = {
            name: 'Elzero',
            age: 27
        }
        expect(myObject).toHaveProperty("age", 27)
    })
})

expect.extend({
    toBeLargerThan(received, target) {
        const pass = received > target
        if (pass) {
            return {
                message: () => `Expected ${received} to Larger than ${target}`,
                pass: true
            }
        } else {
            return {
                message: () => `Error: Expected ${received} to Larger than ${target}`,
                pass: false
            }
        }
    }
})

describe('Checking on my own Matchers', () => {
    test('Check if an element more than 1', () => {
        expect(10).toBeLargerThan(1)
    })
})