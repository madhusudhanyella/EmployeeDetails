        app.controller("createEmployeeController",function($scope,$http,$rootScope,$location){
            

        $http.get('http://localhost:62988/api/Department')
             .then(function(response){
                $scope.departments = response.data;
             })
 
        $scope.nameGiven='';
        $scope.addressGiven='';
        $scope.salaryGiven='';
        $scope.genderGiven='';
        $scope.departmentGiven='';
        
        $scope.SubmitEmployee = function(){
            var emp = {
                EmpName:$scope.nameGiven,
                EmpAddress:$scope.addressGiven,
                EmpSalary:$scope.salaryGiven,
                EmpGender:$scope.genderGiven,
                DeptId:$scope.departmentGiven,
                AddedBy:$rootScope.userLoggedIn
            };

            $http.post('http://localhost:62988/api/Employees',emp)
                 .then(function successCallback(response){
                     alert('Employee is added to the list');
                     $scope.nameGiven='';
                    $scope.addressGiven='';
                    $scope.salaryGiven='';
                    $scope.genderGiven='';
                    $scope.departmentGiven='';
                    },
                    function errorCallback(response){
                        $location.path("/404");
                        console.log(response.status);
                    })
        }
})