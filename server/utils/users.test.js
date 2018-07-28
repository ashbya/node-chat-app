const expect = require('expect');
const {Users} = require('./users');


describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'TestRoom'
    };
    var result = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);

  });

  it('should return names for Node Course', () => {
    let userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for React Course', () => {
    let userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });

  it('should remove a user', () => {
    let userId = '1';
    let removedUser = users.removeUser(userId);

    expect(removedUser.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    //provide an invalid id and ensure user was not removed
    let userId = '11';
    let removedUser = users.removeUser(userId);

    //  expect(removedUser.id).toBe(userId);
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    let findUser = users.getUser('2');

    expect(findUser).toBe(users.users[1]);
  });

  it('should not find user', () => {
    let findUser = users.getUser('22');

    expect(findUser).toBe(undefined);
    //expect(findUser).toNotExist();
  });
})
