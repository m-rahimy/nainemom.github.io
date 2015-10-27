function getComments( postId, callback ){
	var comments_url = 'http://morde.net84.net/nai_comment.php?oper=fetch&post='+ postId;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			data = JSON.parse( xhttp.responseText );
			callback( data );
		}
	}
	xhttp.open("GET", comments_url, true);
	xhttp.send();
}
function commentsToLayout( sectionId, comments ){
	var cm, nm, ln, bd;
	var section = document.getElementById(sectionId);
	section.innerHTML = '';
	for( var i = 0; i < comments.length; i++ ){
		cm = document.createElement('div');
		cm.classList.add('comment');
		
		nm = document.createElement('span');
		nm.classList.add('name');
		if( comments[i].name == '' ){
			nm.classList.add('me');
			comments[i].name = 'امير';
		}
		if( comments[i].link ){
			ln = document.createElement('a');
			ln.classList.add('name');
			ln.setAttribute('target', '_blank');
			ln.setAttribute('href', '//'+comments[i].link);
			ln.innerHTML = comments[i].name;
			nm.appendChild( ln );
		}
		else
			nm.innerHTML = comments[i].name;
		bd = document.createElement('span');
		bd.classList.add('body');
		bd.innerHTML = comments[i].body;
		
		cm.appendChild( nm );
		cm.appendChild( bd );
		section.appendChild( cm );
	}
}