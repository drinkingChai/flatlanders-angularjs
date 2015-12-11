(function() {
	//custom directives
	var app = angular.module('cart', []);
	
	app.directive('cart', function() {
		//cart directive
		return {
			restrict: 'E',
			templateUrl: 'snippets/cart.html',
			controller: function() {
				this.cart = [];

				this.addToCart = function(product) {
					//add quantity
					var notFoundInCart = true;
					for (item in this.cart) {
						//searches to see if the product is already in this.cart
						if (this.cart[item].name === product.name) {
							this.cart[item].quantity += product.addNewQuantity;
							notFoundInCart = false;
						}
					}

					if (notFoundInCart) {
						//if the product is not in this.cart, add it
						product.quantity = product.addNewQuantity;
						this.cart.push(product);
					}

					//reset addNewQuantity
					product.addNewQuantity = 1;
				}

				this.updateTotal = function() {
					//calculate total
					total = 0;
					for (item in this.cart) {
						total += this.cart[item].price * this.cart[item].quantity;
					}
					return total;
				}

				this.removeFromCart = function(product) {
					//remove item by index
					this.cart.splice(this.cart.indexOf(product), 1)
				}
			},
			controllerAs: 'cartCtl'
		};
	});

	app.directive('cartConfirmation', function() {
		//cart confirmation directive
		return {
			restrict: 'E',
			templateUrl: 'snippets/cart-confirmation.html'
		};
	});

	app.directive('storeHeader', function() {
		//store header directive
		return {
			restrict: 'E',
			templateUrl: 'snippets/header.html'
		};
	});

})();