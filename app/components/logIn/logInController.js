app.controller("logInController",function($rootScope,$scope,$http,$location){

    
    $scope.username = '';
    $scope.password = '';
    $rootScope.logInFlag = false;
    
    $scope.Reset = function(){
        $scope.username = '';
        $scope.password = '';
        $scope.msg = '';
    }

    $scope.Submit= function(){
        $http.get('http://localhost:62988/api/User')
             .then(function successCallback(response){
                 $scope.users = response.data;
                 var f=false;
                 angular.forEach($scope.users,function(value,key){
                     if(value.Username.toLowerCase()==$scope.username.toLowerCase() && value.Password==$scope.password){
                         $rootScope.logInFlag = true;
                         $rootScope.userLoggedIn = value.Username;
                         f= true;
                         $location.path('/home');
                     }
                 })
                if(f == false){
                    $scope.msg = 'Sorry, user name or password is incorrect..';
                }
                else{
                    $scope.msg = '';
                }
             },function errorCallback(response){
                 $location.path("/404");
                 console.log(response.status);
             })
    }
})