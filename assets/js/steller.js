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

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    let currentIndex = 0;

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
            currentIndex = index;
        }
    }

    function handleScroll(event) {
        const delta = event.deltaY || event.detail || -event.wheelDelta;

        if (delta > 0) {
            scrollToSection(currentIndex + 1);
        } else {
            scrollToSection(currentIndex - 1);
        }
    }

    document.addEventListener('wheel', handleScroll);

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowDown') {
            scrollToSection(currentIndex + 1);
        } else if (event.key === 'ArrowUp') {
            scrollToSection(currentIndex - 1);
        }
    });
});