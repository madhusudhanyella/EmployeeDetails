app.controller('signUpController',function($scope,$http,$location){
    $scope.signUp = function(){
        $http.get('http://localhost:62988/api/User')
             .then(function(respons){
                 var flagg = false;
                 $scope.users = respons.data;
                 angular.forEach($scope.users,function(value,key){
                     if(value.Username.toLowerCase() == $scope.Uname.toLowerCase()){
                         $scope.msg = 'Username exists please choose another..';
                         flagg = true;
                     }
                     if(value.Email.toLowerCase()==$scope.Uemail.toLowerCase()){
                         $scope.msgEmail = 'Email already exists please choose another..';
                         flagg = true;
                     }
                 })
                 if(flagg == false){
                     $scope.msg = '';
                     $scope.msgEmail='';
                        var user = {
                        Name : $scope.name,
                        Username : $scope.Uname,
                        Password : $scope.Upassword,
                        Email:$scope.Uemail
                        }
                        $http.post('http://localhost:62988/api/User',user)
                        .then(function(response){
                            alert('Signed up successfully. Log in Now.');
                            $location.path('logIn');
                        })
                 }
             })
    }
})