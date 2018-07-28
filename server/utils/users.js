[{
  id: 'aslkfaljkfawkljflkjasdf',
  name: 'Andrew',
  room: 'the Office Fans'
},
{

}]

//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room); return array of names

// ES6 class; uppercase is just convention
class Users {
  constructor () {
    this.users = [];  //empty array
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    var userToBeRemoved = this.users.filter((user) => user.id === id)[0];

    // update array to not include id
    this.users = this.users.filter((user) => user.id !== id);

    return userToBeRemoved;
  }

  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList(room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};
