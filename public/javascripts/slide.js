jQuery(document).ready(function($) {
	// We only want these styles applied when javascript is enabled
	$('div.navigation').css({'width' : '350px', 'float' : 'left'});
	$('div.gallery').css('display', 'block');

	// Initially set opacity on thumbs and add
	// additional styling for hover effect on thumbs
	var onMouseOutOpacity = 0.67;
	$('#slideshow-link > ul.thumbs > li').opacityrollover({
		mouseOutOpacity:   onMouseOutOpacity,
		mouseOverOpacity:  1.0,
		fadeSpeed:         'fast',
		exemptionSelector: '.selected'
	});

	// Initialize Advanced Galleriffic Gallery
	if ($('#slideshow-link').length) {
		var gallery = $('#slideshow-link').galleriffic({
			delay:                     2500,
			numThumbs:                 15,
			preloadAhead:              10,
			enableTopPager:            true,
			enableBottomPager:         true,
			maxPagesToShow:            4,
			imageContainerSel:         '#slideshow',
			captionContainerSel:       '#caption',
			loadingContainerSel:       '#loading',
			renderSSControls:          true,
			renderNavControls:         true,
			autoStart:                 false,
			syncTransitions:           true,
			enableKeyboardNavigation:  false,
			defaultTransitionDuration: 900,
			onPageTransitionOut:       function(callback) {
				this.fadeTo('fast', 0.0, callback);
			},
			onPageTransitionIn:        function() {
				this.fadeTo('fast', 1.0);
			}
		});
	}
});