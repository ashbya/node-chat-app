var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate the correct location object', () => {
      var from = 'TestAdmin';
      var latitude = 35;
      var longitude =  86;
      var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
      var msg = generateLocationMessage(from, latitude, longitude);

      expect(msg.from).toBe(from);
      expect(msg.url).toBe(url);
      //expect(msg).toInclude({from: 'test1', text: 'Test message.'});
      expect(typeof msg.createdAt).toBe('number');
    });
});
