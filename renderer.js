class Renderer{ 

	renderEvent(){

	document.addEventListener("shout", function(event) {

		let div = document.createElement('div');

		let authorId = event.detail.author._id;
		let authorName = event.detail.author.name;
		let authorToAdd = {_id: authorId,
							name: authorName};

		let str = 'author is ' + event.detail.author.name + 
 								'; text is ' + event.detail.text;
 		div.innerHTML = str;

 		div.style.backgroundColor = 'green';
 		div.style.fontSize = '20px';

 		document.body.appendChild(div);

 		setTimeout(() => {
		div.style.backgroundColor = 'white';
		}, 1000);

	 		for (let i = 0; i < authorsList.length; i++) {
	 			if (authorName == authorsList[i].name) {
	 				
			if (!authorsList[i].hasOwnProperty('countShouts')) {
				authorsList[i]['countShouts'] = 0;
			}
			
			authorsList[i]['countShouts'] = authorsList[i]['countShouts'] + 1;
	 	}
	 }
			let paragraph = document.createElement('p');
			paragraph.innerHTML = JSON.stringify(authorsList);
	 		document.body.appendChild(paragraph);

 		console.log(authorToAdd);				
  		}, false);
	}
}

 const renderer = new Renderer();
 renderer.renderEvent();