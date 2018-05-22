$(function() {

	// Custom JS
	var productViewer = function(element) {
		this.element = element;
		this.handleContainer = this.element.find('.cd-product-viewer-handle');
		this.handleFill = this.handleContainer.children('.fill');
		//...
		this.frames = this.element.data('frame');
		this.friction = this.element.data('friction');
		this.visibleFrame = 0;
		this.loaded = false;
		//...
		this.loadFrames();
		}</p>
		productViewer.prototype.loadFrames = function() {
			var self = this,
			imageUrl = this.slideShow.data('image');
			$('<img/>').attr('src', imageUrl).load(function() {
				self.loaded = true;
			});

			this.loading('0.5'); //анимация загрузки индикатора
		}

		var productToursWrapper = $('.cd-product-viewer-wrapper');
		productToursWrapper.each(function(){
			new productViewer($(this));
		});


		if( self.loaded ){
		//cпрайт изображение было загружено
		self.element.addClass('loaded');
		self.dragImage();
		self.dragHandle();
		//..
		} else {
		//...
		}
});

