angular.module( 'ledgerd.withdraw', [
    'ui.state',
    'ui.bootstrap'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'withdraw', {
            url: '/withdraw',
            views: {
                "main": {
                    controller: 'WithdrawCtrl',
                    templateUrl: 'withdraw/withdraw.tpl.html'
                }
            },
            data:{ pageTitle: '提现' }
        });
    })

    .controller( 'WithdrawCtrl', function ActiveAccountsCtrl( $scope ) {

    });