(function(){
    'use strict';

    angular.module('LunchCheck',[]).controller('LunchCheckController', function($scope){
        $scope.checkIfTooMuch = function(mealList) {
            if (mealList == undefined || mealList == ''){
                alert("Please enter data first");
                return;
            } 
            var meals = mealList.split(',');
            if (meals.length <=3) alert('Enjoy!');
            else alert('Too Much!')
        };
    });

})();
