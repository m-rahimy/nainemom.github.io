var images = document.getElementsByClassName('image');
var imageInNewTab = function(elem){
	window.open(elem.target.src, '_blank').focus();
}
for (var i = 0; i < images.length; i++)
    images[i].addEventListener('click', imageInNewTab, false);

