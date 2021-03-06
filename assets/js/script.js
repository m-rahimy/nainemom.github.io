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
			comments[i].link = 'https://twitter.com/nainemom'
		}
		if( comments[i].link ){
			ln = document.createElement('a');
			ln.classList.add('name');
			ln.setAttribute('target', '_blank');
			if ( comments[i].link.indexOf('http://') != 0 && comments[i].link.indexOf('https://') != 0 )
				comments[i].link = 'http://' + comments[i].link;
			ln.setAttribute('href', comments[i].link);
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
function isUrl(url) {
	if( typeof url != 'string' || url == null ) url = '';
	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);
	if ( url.match(regex) )
		return true;
	else
		return false;
}
function loadJSON(path, success, error){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState !== XMLHttpRequest.DONE)
			return false;
		if (xhr.status === 200 && success)
			success(JSON.parse(xhr.responseText));
		else if (error)
			error(xhr);
	};
	xhr.open("GET", path, true);
	xhr.send();
}
