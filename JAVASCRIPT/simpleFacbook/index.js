const database = [
    {
        username: 'Uchenna',
        password: 'secret'
    }
]

const newFeeds = [
    {
        username: 'John',
        post: 'Hello there!'
    },
    {
        username: 'Amara',
        post: 'I enjoyed learning JavaScript today!'
    }
]

const userName = prompt('what is your username?');
const password = prompt('what is your password?');

function signIn(username, password) {
    if((username === database[0].username) && 
        (password === database[0].password)) {
        console.log(newFeeds);
    } else {
        console.log("wrong username and password")
    }
}

signIn(userName, password)