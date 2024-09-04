const mocker = require('../mock')

test('Mock Function', () => {
    const mocker = jest.fn((name => `Hello ${name}`))
    expect(mocker('Ahmed')).toBe('Hello Ahmed')
    expect(mocker('Eman')).toBe('Hello Eman')
    expect(mocker('Mohamed')).toBe('Hello Mohamed')
    expect(mocker).toHaveBeenCalled()
    expect(mocker).toHaveBeenCalledTimes(3)
    expect(mocker).toHaveBeenCalledWith('Eman')
    expect(mocker).toHaveBeenLastCalledWith('Mohamed')
})