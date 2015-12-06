(function() {
	var app = angular.module('store', ['store-products']);

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

})();