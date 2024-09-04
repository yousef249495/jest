const sayHello = require('../say');

test.skip('say hello message to jest', () => {
    expect(sayHello('Jest')).toBe('Hello Jest');
});
