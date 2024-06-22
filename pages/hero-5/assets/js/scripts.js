$(function() {
	var slider = $('.slider');
	var slide = $('.slide');
	var navigation = $('.navigation');
	var nav = $('.nav');
	
	slide.each(function(index) {
		var $this = $(this);
		
		$this.attr('data-slide', index + 1);
	});
	
	nav.each(function(index) {
		var $this = $(this);
		
		$this.attr('data-item', index + 1)
	})
	
	nav.on('click', function(e) {
		e.preventDefault();
		
		var $this = $(this);
		var itemNav = $this.data('item');
		var prevSlide = itemNav - 1;
		var a, b;
		
		if (itemNav == 1) {
			a = nav.length;
			b = 1;
		} else {
			a = prevSlide;
			b = itemNav;
		}
			slider.addClass('slider--back').delay(600).queue(function(){
				$(this).removeClass('slider--active-'+a)
					.addClass('slider--active-'+b)
					.addClass('slider--delay')
					.dequeue();
			}).delay(400).queue(function() {
				$(this).removeClass('slider--back')
				.dequeue();
			}).delay(400).queue(function(){
				$(this).removeClass('slider--delay')
				.dequeue();
			})
	})
});