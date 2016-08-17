joeApp
    .controller('InputController', function ($scope) {
    $scope.parts = [
        { model: 'Lungs and Respitory System' },
        { model: 'Heart and Circulatory System' },
        { model: 'Stomach and Digestive System' },
        { model: 'Brain and Nervous System' },
        { model: 'Joints and Bones' }
    ];
    $scope.hospitals = [
        {
            name: 'Baptist',
            distance: 4.5,
            expertise: 1.83,
            cost: 7956,
            address: '',
            phone: '',
            color: 'green'
        },
        {
            name: 'Middle',
            distance: 14.7,
            expertise: 1.15,
            cost: 6623,
            address: '',
            phone: '',
            color: 'yellow'
        },
        {
            name: 'Sumner',
            distance: 7.7,
            expertise: 1.04,
            cost: 8662,
            address: '',
            phone: '',
            color: 'red'
        }
    ];
});
//# sourceMappingURL=home-controller.js.map