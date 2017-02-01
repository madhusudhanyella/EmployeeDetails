var app = angular.module("myModule",['ngRoute'])
     

    .config(function($routeProvider,$locationProvider,$httpProvider){
        
        $routeProvider


                .when('/home',{
                    templateUrl:'components/home/home.html',
                    controller:'homeController'
                })
                .when('/showEmployees',{
                    templateUrl:'components/showEmployees/showEmployees.html',
                    controller:'showEmployeesController'
                })
                .when('/createEmployee',{
                    templateUrl:'components/createEmployee/createEmployee.html',
                    controller:'createEmployeeController'
                })
                .when('/editEmployee',{
                    templateUrl:'components/editEmployee/editEmployee.html',
                    controller:'editEmployeeController'
                })
                .when('/deleteEmployee',{
                    templateUrl:'components/deleteEmployee/deleteEmployee.html',
                    controller:'deleteEmployeeController'
                })
                .when('/logIn',{
                    templateUrl:'components/logIn/logIn.html',
                    controller:'logInController'
                })
                .when('/logOut',{
                    templateUrl : 'components/logOut/logOut.html',
                    controller:'logOutController'
                })
                .when('/about',{
                    templateUrl : 'components/about/about.html',
                    controller:'aboutController'
                })
                .when('/contactUs',{
                    templateUrl : 'components/contactUs/contactUs.html',
                    controller:'contactUsController'
                })
                .when('/signUp',{
                    templateUrl : 'components/signUp/signUp.html',
                    controller:'signUpController'
                })
                .when('/404',{
                    templateUrl : 'components/Four04/404.html',
                    controller:'Four04Controller'
                })
                .otherwise({
                    redirectTo:'/home'
                })             
                 $locationProvider.html5Mode(true);
                
});
    $httpProvider.interceptors.push(logTimeTaken);
    
   app.factory('logTimeTaken', [function() {
    var logTimeTaken = {
        request: function(config) {
            config.requestTimestamp = new Date().getTime();
            return config;
        },
        response: function(response) {
            response.config.responseTimestamp = new Date().getTime();
            return response;
        }
    };
    return logTimeTaken;
}]);
    
