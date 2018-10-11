
$.get('https://cors-anywhere.herokuapp.com/https://imgur.com/a/' + imgurId, function(response) {
	//div id="i3bWIvC" class="post-image-container"
	//p class="post-image-description"
	//[0].children[1].children[0].innerText

	var album = document.getElementById("album");
	album.innerHTML = "";

	var imgurLink = document.createElement("a");
	imgurLink.href = 'https://imgur.com/a/' + imgurId;
	imgurLink.innerHTML = "Original imgur album";
	album.appendChild(imgurLink);

	var images = $("div.post-image-container", response);
	for (var i = 0; i < images.length; i++) {
		var div = images[i];
		var imgUrl = "https://i.imgur.com/"+div.id+".png";
		var description = div.querySelector("p.post-image-description");
		if (description) {
			console.log(description);
			description = description.innerText.replace(/(?:\r\n|\r|\n)/g, '<br>');
		};

		var img = document.createElement("img");
		img.src = imgUrl;
		img.style = "width:100%";
		img.innerHTML = "hi";
		album.appendChild(img);

		var p = document.createElement("p");
		p.innerHTML = description;
		album.appendChild(p);
	}
});
