/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'));
jarallax(document.querySelectorAll('.jarallax-keep-img'), { keepImg: true });

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, options);
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// Or with jQuery

$(document).ready(function() {
	$('.sidenav').sidenav();
});
