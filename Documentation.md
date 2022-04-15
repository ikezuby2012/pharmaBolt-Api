POST https://pharmabolt.herokuapp.com/api/v1/user/signup
{
"name": "test",
"email": "test@email.com",
"password": "testing01",
"passwordConfirm": "testing01"
}

Response
{
"status": "success",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGM5ZmExZDU2MDVkMWYxZDI0N2Y1YiIsImlhdCI6MTY0OTE5NDI5MiwiZXhwIjoxNjU2OTcwMjkyfQ.Kxb1p4ROIMdhJKCrOagjZRSqsLYU5AOyhs2a_XZQCgQ",
"user": {
"\_id": "624c9fa1d5605d1f1d247f5b",
"name": "test",
"email": "test@email.com",
"password": "$2a$12$EctvJ9JShsv1zKMG0.bl9e4tEcx1p36XbjMfE7mLJIlqTj4XLNSsu",
"role": "user",
"createdAt": "2022-04-05T19:58:14.625Z",
"\_\_v": 0,
"id": "624c9fa1d5605d1f1d247f5b"
}

POST https://pharmabolt.herokuapp.com/api/v1/user/login

GET https://pharmabolt.herokuapp.com/api/v1/drug


response will be same thing as the login

user must be logged in before performing any of the request;
request should be sent with authentication jwt token;

e.g
"authorization": {
    "headers": "bearer {{token}}"
}

this fetch all the items in the drug store;

POST https://pharmabolt.herokuapp.com/api/v1/drug

to add a new item to the drug store

payload e.g

{
"name": "Cipro", //name of product
"ratingAverage": 4.9, //rating average of product
"price": 2479, // price of product
"category": "drugs",
"description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"imageCover": "Cipro.jpg",
"images": []
},

GET https://pharmabolt.herokuapp.com/api/v1/drug/473883774838774848

get a particular drug from the store

GET https://pharmabolt.herokuapp.com/api/v1/drug/expensive-drugs

get the price of all the drugs in the store in a decreasing order

Thank you!
