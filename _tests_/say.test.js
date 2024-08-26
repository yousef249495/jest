const say = require('../say');

test('say hello message to jest', () => {
    expect(say()).toBe('Hello Jest');
});
