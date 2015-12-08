(function() {
	//custom directives
	var app = angular.module('store-products', []);
	
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
					//to change the panel
					this.tab = setTab;
				}

				this.isSelected = function(checkTab) {
					//to set the css of the tab if it is selected
					return this.tab === checkTab;
				}
			},
			controllerAs: 'panel'
		};
	});

	app.directive('productGallery', function() {
		return {
			restrict: 'E',
			templateUrl: 'snippets/product-gallery.html',
			controller: function() {
				this.currentImage = 0;

				this.selectImage = function(setImage) {
					//takes input the image number
					this.currentImage = setImage;
				}
			},
			controllerAs: 'gallery'
		};
	});
})();