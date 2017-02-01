app.controller("showEmployeesController",function($scope,$http,$location,$timeout){
    // $timeout(function(){
    //     $location.path('/404');
    // },3000);
    $http.get('http://localhost:62988/api/Employees')
         .then(function(response){
             var time = response.config.responseTimestamp - response.config.requestTimestamp;
             if(time>5000){
                 $location.path('/404');
             }
             else{
             $scope.employees = response.data;
             angular.forEach($scope.employees,function(value,key){
                 var DepId = value.DeptId;
                 $http.get('http://localhost:62988/api/Department/'+DepId)
                      .then(function successCallback(response){
                          var Dep = response.data;
                          value.DeptId = Dep.DeptName;
                      },
                    function errorCallback(response){
                        $location.path("/404");
                        console.log(response.status);
                    })
             })
             }
         })
})