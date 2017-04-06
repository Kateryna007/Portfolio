//SLIDER
var imgWidth = $('.gal img').width();
var imgCount = $('.gal img').length;
var isAnimated = false;

	$('.arrow.next, .arrow.prev').click(function () {
			if (isAnimated) {
				return;
	}
		isAnimated = true; 
		var currentPosition = parseInt($('.gal-inner').css('margin-left'));
		var newPosition;

		if ($(this).hasClass('next')) {
			if (currentPosition === -(imgCount-1) * imgWidth) {
			newPosition = 0;
			} else {
			newPosition = parseInt(currentPosition) - imgWidth; 
			}
		} else {
			if (currentPosition === 0) {
				newPosition = -(imgCount-1) *imgWidth;
			} else {
			newPosition = currentPosition + imgWidth
		}
	}

		$('.gal-inner').animate({
			'margin-left': newPosition
		}, 500, function() {
			isAnimated = false;
			});
		});

var openers = document.querySelectorAll('#open');
for (var i = 0; i < openers.length; i++) {
  openers[i].addEventListener("click", (function(event) {
    event.preventDefault();
    var show = document.getElementById('show');
    show.classList.toggle('hide');
    }))
}
