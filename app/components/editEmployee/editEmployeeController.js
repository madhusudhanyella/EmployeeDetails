app.controller("editEmployeeController",function($scope,$http,$location){
    $scope.IdGiven = '';
    $scope.flag = false;
    // $scope.msg='';
    // $scope.name = '';
    // $scope.address = '';
    // $scope.salary = '';
    // $scope.gender = '';
    // $scope.department ='';
 
    $http.get('http://localhost:62988/api/Department')
         .then(function(response){
             $scope.departments = response.data;
         })


    $scope.GetEmployee = function(){
        $http.get('http://localhost:62988/api/Employees')
             .then(function(respons){
                 $scope.employees = respons.data;
                 var f = false;
                 angular.forEach($scope.employees,function(value,key){
                     if(value.EmpId == $scope.IdGiven){
                                f = true;
                                $http.get('http://localhost:62988/api/Employees/'+$scope.IdGiven)
                                .then(function successCallback(response){
                                    $scope.employee = response.data;
                                    $scope.name = $scope.employee.EmpName;
                                    $scope.address = $scope.employee.EmpAddress;
                                    $scope.salary = $scope.employee.EmpSalary;
                                    $scope.gender = $scope.employee.EmpGender;
                                    $scope.department = $scope.employee.DeptId;
                                    $scope.flag = true;
                                },
                                function errorCallback(response){
                                    $location.path("/404");
                                    console.log(response.status);
                                })
                     } 
                 })
                if(f == false){
                $scope.flag = false;
                $scope.msg = 'Employee is not found with id ' + $scope.IdGiven;
                }
                else{
                    $scope.msg = '';
                }
             })
    }
    $scope.updateEmployee = function(){
        var emp = {
            EmpName : $scope.name,
            EmpAddress : $scope.address,
            EmpSalary : $scope.salary,
            EmpGender : $scope.gender,
            DeptId : $scope.department
        };
        $http.put('http://localhost:62988/api/Employees/'+$scope.IdGiven,emp)
             .then(function successCallback(response){
                 alert('data updated successfully ');
             },
            function errorCallback(response){
                $location.path("/404");
                console.log(response.status);
            })
    }

})