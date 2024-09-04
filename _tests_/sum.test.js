const sum = require('../sum')

describe.skip('Check on sum of numbers', () => {
    describe('For one or zero number', () => {
        test('return Zero', () => {
            expect(sum()).toBe(0)
        })
        test('return the same num for now', () => {
            expect(sum(10)).toBe(10)
        })
    })

    describe('For more than one number', () => {
        test('return the sum of num1 and num2', () => {
            expect(sum(10, 21)).toBe(31)
        })

        test('return the sum of num1, num2 and num3', () => {
            expect(sum(10, 21, 24)).toBe(55)
        })
    })
})

