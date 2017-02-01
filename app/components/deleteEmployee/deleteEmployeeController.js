app.controller("deleteEmployeeController",function($scope,$http,$location){
    
    $scope.IdGiven = '';
    $scope.DeleteEmployee = function(){   
        $http.get('http://localhost:62988/api/Employees')
             .then(function(respons){
                 $scope.employees = respons.data;
                 var f = false;
                 angular.forEach($scope.employees,function(value,key){
                     if(value.EmpId == $scope.IdGiven){
                            f = true;
                             $http.delete('http://localhost:62988/api/Employees/'+ $scope.IdGiven)
                                .then(function successCallback(response){
                                    alert("Employee is deleted successfully with Id : "+$scope.IdGiven);
                                },
                                function errorCallback(response){
                                    $location.path("/404");
                                    console.log(response.status);
                                })
                     }
                 })
                 if(f == false){
                $scope.msg = 'Employee is not found with id ' + $scope.IdGiven;
                }
                else{
                    $scope.msg = '';
                }
             })
    }
})

