angular.module('starter.services', [])

    .factory('Services', function(Ref, $firebaseArray) {

    var user = null;
    var users = null;
    var messages = null;

    var getMessages = function() {
        if (messages === null)
            messages = $firebaseArray(Ref.child('messages'));

        return messages;
    };

    var getUsers = function() {
        if (users === null)
            users = $firebaseArray(Ref.child('users'));

        return users;
    };

    var sendMessage = function(message) {
        getMessages().$add(message);
    };

    var authUser = function(login, pass) {
        if (pass === '0302') {
            console.log('login:', login);
            getUsers().$add(login);
            user = login;
            return true;
        }
        else
            return false;
    };

    var clear = function() {
        getMessages().$remove();  
    };

    var getUser = function() {
        console.log('user:', user);
        return user;   
    };

    var logout = function() {
        user = null;
    };

    return {
        getMessages: getMessages,
        sendMessage: sendMessage,
        authUser: authUser,
        clear: clear,
        getUser: getUser,
        getUsers: getUsers,
        logout: logout
    };

});