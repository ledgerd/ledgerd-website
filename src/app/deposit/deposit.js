angular.module( 'ledgerd.deposit', [
    'ui.state',
    'ui.bootstrap'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'deposit', {
            url: '/deposit',
            views: {
                "main": {
                    controller: 'DepositCtrl',
                    templateUrl: 'deposit/deposit.tpl.html'
                }
            },
            data:{ pageTitle: '充值' }
        });
    })

    .controller( 'DepositCtrl', function ActiveAccountsCtrl( $scope ) {

    });