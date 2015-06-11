angular.module('starter.controllers', [])

    .controller('AppCtrl', function(Services) {
    var vm = this;

    vm.users = Services.getUsers();

    vm.logout = function() {
        Services.logout();
    }

    vm.clear = function() {
        Services.clear();   
    }
})
    .controller('LoginCtrl', function($state, $ionicHistory, Services) {
    var vm = this;

    var n = 0;

    vm.auth = function(login, pass) {
        if (Services.authUser(login, pass)) {
            n = 0;
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.chat');
        }
        else
            n = n + 1;

        if (n === 3) {
            Services.clear();
            n = 0;   
        }
    };
})
    .controller('ChatCtrl', function($state, $ionicHistory, Services) {
    var vm = this;

    vm.user = Services.getUser();
    console.log('vm.user:', vm.user);

    if (vm.user === null) {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('app.login');   
    }

    vm.messages = Services.getMessages();

    vm.send = function(message) {
        console.log('vm.user:', vm.user);
        Services.sendMessage({
            text: message,
            user: vm.user
        });  
    };
});
