var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
      var msg = generateMessage('test1', 'Test message.');

      expect(msg.from).toBe('test1');
      expect(msg.text).toBe('Test message.');
      console.log(msg);
      //expect(msg).toInclude({from: 'test1', text: 'Test message.'});
      expect(typeof msg.createdAt).toBe('number');
    });
});
