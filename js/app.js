(function() {
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function() {
		this.products = [
			{
				name: 'Dodecahedron',
				price: 2.95,
				description: '...',
				canPurchase: true,
				images: [
					'img/gem-02.gif',
					'img/gem-05.gif',
					'img/gem-09.gif'
				],
				reviews: [
					{

					}
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
				],
				reviews: [
					{
						
					}
				]
			}
		]
	});

	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		}
	});

	app.directive('productTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'snippets/product-title.html'
		};
	});

	app.directive('productPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'snippets/product-panels.html',
			controller: function() {
				this.tab = 1;

				this.selectTab = function(setTab) {
					this.tab = setTab;
				}

				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				}
			},
			controllerAs: 'panel'
		};
	});

})();