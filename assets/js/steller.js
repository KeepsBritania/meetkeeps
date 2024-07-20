// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

document.addEventListener('DOMContentLoaded', function() {
	var progressBars = document.querySelectorAll('.progress-bar');
	progressBars.forEach(function(bar) {
		var width = bar.getAttribute('style').match(/width: (\d+)%/)[1];
		bar.style.width = '0%';
		setTimeout(function() {
			bar.style.width = width + '%';
		}, 100);
	});
});
