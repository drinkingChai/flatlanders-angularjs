(function() {
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: '...',
			canPurchase: true,
			images: [
				'img/gem-02.gif',
				'img/gem-05.gif',
				'img/gem-09.gif'
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '...',
			canPurchase: false,
			images: [
				'img/gem-01.gif',
				'img/gem-03.gif',
				'img/gem-04.gif'
			]
		}
	]

	app.controller('PanelController', function() {
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		}

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		}
	});

})();