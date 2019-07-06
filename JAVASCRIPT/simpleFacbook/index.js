const database = [
    {
        username: 'Uchenna',
        password: 'secret'
    },
    {
        username: 'John',
        password: 'supersecret'
    },
    {
        username: 'Amara',
        password: 'topsecret'
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

const usernamePrompt = prompt('what is your username?');
const passwordPrompt = prompt('what is your password?');

function isUserValid(username, password) {
    for(let i = 0; i < database.length; i++) {
        if(username === database[i].username &&
            password === database[i].password) {
            return true;
        }
    }

    return false;

}

function signIn(username, password) {
    if(isUserValid(username, password)) {
        console.log(newFeeds)
    } else {
        alert("wrong username and password!")
    }
}

signIn(usernamePrompt, passwordPrompt)