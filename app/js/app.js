function InvoiceCntl($scope) {
    $scope.qty = 1
    $scope.cost = 19.95
    $scope.discount = false
}

function listCtrl($scope) {
    $scope.features = ['Precio', 'Confiabilidad', 'Garantia']
    $scope.action = function() {
        $scope.boom += "BOOM!"
    }
    $scope.boom = ""
}