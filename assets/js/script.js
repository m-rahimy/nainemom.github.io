
var currentTouching = false;
var clonedHeader = $();
var lastClonedHeader = $();
$( window).on('scroll resize',function() {
	var scrollTop = $(this).scrollTop();
	var post = $('.post').touching( {x:'50%', y: scrollTop-10} );
	currentTouching =  post.html()!=null?post:false;
	if( currentTouching ){ // dar hale malidane ye post...
		var clonedHeaderId = '#'+ post.attr('id') + '-cloned-header';
		clonedHeader = $(clonedHeaderId);
		var currentTouchingOpt = {
			h: currentTouching.outerHeight(),
			w: currentTouching.outerWidth(),
			t: currentTouching.offset().top
		}
		var clonedPos = currentTouchingOpt.h - (scrollTop - currentTouchingOpt.t);
		
		if( clonedHeader.html() == null ){ //ghablan clonedesh ro nasakhtam
			lastClonedHeader.remove();
			clonedHeader = post.find('.header')
			 .clone()
			  .addClass('cloned')
			   .attr('id',clonedHeaderId)
			    .css('width', currentTouchingOpt.w+'px' )
				 .appendTo( post );
				 
			lastClonedHeader = clonedHeader;
		}
		if( clonedPos < 250 )
			clonedHeader.fadeTo(0, clonedPos/100 );
		clonedHeader.find('.percetage').css('width',  (100 - ((clonedPos * 100) / currentTouchingOpt.h)) + '%' );
		

	}
	else{
		lastClonedHeader.remove();

	}
});



$('#new-comment').submit( function(){
	var data = $(this).serializeArray();
	var url = "http://pooleapp.com/stash/676390e8-66af-442f-b9a8-9ab5b2899bc9/";
	$.post(url, data, function(){
		alert('کامنت شما ثبت شد و پس از تایید نویسنده، نمایش داده می‌شود.');
	});
	return false;
});