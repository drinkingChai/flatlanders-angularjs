(function() {
	//custom directives
	var app = angular.module('cart', []);
	
	app.directive('cart', function() {
		return {
			restrict: 'E',
			templateUrl: 'snippets/cart.html',
			controller: function() {
				this.cart = [];
				this.total = 0;

				this.addToCart = function(product) {
					//add quantity
					this.cart.push(product);
					this.total += product.price;
				}

				this.updateCart = function(product, newQuantity) {

				}

				this.removeFromCart = function(product) {
					this.cart.splice(this.cart.indexOf(product), 1)
					this.total -= product.price;
				}
			},
			controllerAs: 'cartCtl'
		};
	});
})();