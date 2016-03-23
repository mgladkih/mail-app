angular.module('usercards', [])
    .component('usercards', {
        templateUrl: 'usercards.html',
        controller: function (UserService) {
            var ctrl = this;
            ctrl.users = [];
            UserService.getUsers().then(function (response) {
                ctrl.users = response.data;
            })
        }
    })
    .component('usercard', {
        bindings: {
            user: '<'
        },
        templateUrl: 'usercard.html',
        controller: function () {
            var ctrl = this;
            ctrl.age = function (birthDate) {
                console.log(birthDate);
                console.log(Date.parse(birthDate));
                var birthday = new Date();
                console.log(birthday);
                var now = new Date();
                return now.getFullYear() - birthday.getFullYear();
            }
        }
    })
    .service('UserService', function ($http) {
        this.getUsers = function () {
            return $http.get('https://vivid-inferno-9244.firebaseIO.com/users.json');
        }
    });
