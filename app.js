(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
           .controller('ToBuyController', ToBuyController)
           .controller('AlreadyBoughtController', AlreadyBoughtController)
           .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.getToBuyList();
        this.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }; 
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.getBoughtList();
    }

    function ShoppingListCheckOffService() {
        var toBuyList = [
            { name: "Apple", quantity: 7 }, //One for everyday, keeps the doctor away :)
            { name: "Bread", quantity: 2 },
            { name: "Milk", quantity: 3 },
            { name: "Egg", quantity: 15 },
            { name: "Pasta", quantity: 4 }
        ];
        var boughtList = [];

        this.getToBuyList = function () {
            return toBuyList;
        }
        this.getBoughtList = function () {
            return boughtList;
        }
        this.buyItem = function (index) {
            boughtList.push(toBuyList[index]);
            toBuyList.splice(index, 1);        
        }
    }
})();