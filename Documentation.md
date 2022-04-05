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
        "_id": "624c9fa1d5605d1f1d247f5b",
        "name": "test",
        "email": "test@email.com",
        "password": "$2a$12$EctvJ9JShsv1zKMG0.bl9e4tEcx1p36XbjMfE7mLJIlqTj4XLNSsu",
        "role": "user",
        "createdAt": "2022-04-05T19:58:14.625Z",
        "__v": 0,
        "id": "624c9fa1d5605d1f1d247f5b"
}

POST https://pharmabolt.herokuapp.com/api/v1/user/login

response will be same thing as the login 

Thank you!