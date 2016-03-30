// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1598653853790219', // your App ID
        'clientSecret'    : '9c8ffcd78ae1b0715e1cca155c8f92fc', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '652224470975-vtlsal951gt997mr0th7dpbpbd85bjnn.apps.googleusercontent.com',
        'clientSecret'     : 'AlI6YLA9aweiJUMVqT6pq3bB',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
