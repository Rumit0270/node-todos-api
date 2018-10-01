const {SHA256} = require('crypto-js');
const jwt =  require('jsonwebtoken');
const bcrypt = require('bcryptjs');



/// working of bcrypt
var password = '123456789';
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$DXsSn7Z1OP4ezDW5F/uUou7BpuEImd7KO7UaaQgw.MUY7POrzCYru';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});



// var message = 'Hello, I am user';
//
// var hash = SHA256(message).toString();
//
// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);


// var data = {
//    id: 3
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secret').toString()
// }
//
//
// var resultHash = SHA256(JSON.stringify(data) + 'secret').toString();
//
// if (resultHash===token.hash) {
//   console.log('data was not changed');
// } else {
//   console.log('data was changed');
// }


// var data = {
//   id: 10
// };
//
//
// //jwt.sign(): It generates the token for given data
// // first arg: data
// // second arg: salt
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);
