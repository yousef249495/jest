const say = require('../say');

test.skip('say hello message to jest', () => {
    expect(say()).toBe('Hello Jest');
});
