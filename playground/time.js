var moment = require('moment');

var date = moment();
console.log(date.format('h:mm:ss a'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);
