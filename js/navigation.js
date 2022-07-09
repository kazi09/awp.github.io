
var app= angular.module("mymodule",["ngRoute"])
app.config(function($routeProvider) {
    $routeProvider
    .when("/home",{templateUrl:"home.html"})
    .when("/aboutus",{templateUrl:"aboutus.html"})
    .when("/services",{templateUrl:"services.html"})
    .when("/contactus",{templateUrl:"contactus.html"})
})
                


