function loadItems(){
	var allItems = document.querySelectorAll('.item:not(.loaded)');
	for( var i = 0; i < allItems.length; i++ ){
		if( isElementInViewport( allItems[i] ) ){
			allItems[i].classList.add('loaded');
		}
	}
}


("scroll resize load".split(" ")).forEach(function(e){
	window.addEventListener(e,loadItems,false);
});


var swiper = new Swiper('#design-sample', {
	pagination: '#design-sample .swiper-pagination',
/*  	nextButton: '#design-sample .swiper-button-next',
	prevButton: '#design-sample .swiper-button-prev', */
	paginationClickable: true,
	keyboardControl: true,
	loop: true
});
		
			



function isElementInViewport (el) {
	var top = el.offsetTop;
	var height = el.offsetHeight;

	while(el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
	}

	return (
	top >= window.pageYOffset &&
	(top + (height/2)) <= (window.pageYOffset + window.innerHeight)
	);
}