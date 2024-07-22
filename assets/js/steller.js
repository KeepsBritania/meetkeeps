// smooth scroll
$(document).ready(function(){
	$(".nav-link, .nav-link-btn").on('click', function(event) {

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


// Get all the modals
var modals = document.querySelectorAll(".modal");

// Get all the buttons that open the modals
var btns = document.querySelectorAll(".open-modal");

// Get all the <span> elements that close the modals
var spans = document.querySelectorAll(".close");

// When the user clicks the button, open the corresponding modal 
btns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = document.getElementById(this.dataset.modal);
        modal.style.display = "block";
    }
});

// When the user clicks on <span> (x), close the modal
spans.forEach(function(span) {
    span.onclick = function() {
        modals.forEach(function(modal) {
            modal.style.display = "none";
        });
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
