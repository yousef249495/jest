const input = require('../input')

describe('Validate The Input Field', () => {
    describe('Checking on The Name', () => {
        test('Checking on Username', () => {
            expect(input('Yousef')).toBe('Yousef')
        })
        test.skip('Checking on Username If Not Provided', () => {
            expect(input()).toBe('Unknown')
        })
        test('Checking on Username If Empity', () => {
            expect(input('')).toBe('Unknown')
        })
        test('Checking on Username For Spaces', () => {
            expect(input(' qwe ')).toBe('qwe')
        })
        test('Checking on Username If more than 10 charactar', () => {
            expect(input('Yousef_Ayman_Mohamed')).toBe('Yousef_Aym')
        })
        test('Checking on Username If not Start with Underscore', () => {
            expect(input('_Yousef_Ayman_Mohamed')).toBe('Yousef_Aym')
        })
    })
})