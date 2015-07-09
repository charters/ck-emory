
angular.module('leaderboardApp',[]).filter('sameUnit', function(){
    
    return function(items, in_color){
        
        var arrayToReturn = [];        
        for (var i=0; i<items.length; i++){
            if (items[i].color == in_color) {
                arrayToReturn.push(items[i]);
            }
        }
        
        return arrayToReturn;
    };
});