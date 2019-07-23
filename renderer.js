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

 		document.body.appendChild(div);

 		delayInside(div);
	 	
 		if (listAuthors.length == 0) {
 			listAuthors.push(authorToAdd);
 		}
 		if(listAuthors.length >= 1 && listAuthors.length !== 3){
 			let isEqual = false;
	 		for (var i = 0; i < listAuthors.length; i++) {
	 			if (listAuthors[i].name == authorName) {
	 				isEqual = true;
	 				break;
	 			}
	 			isEqual = false;
	 		}
	 		if (!isEqual) {
			listAuthors.push(authorToAdd);
			}
	 	}
	 	if (listAuthors.length == 3) {
			let h1 = document.createElement('h1');
			h1.innerHTML = 'The list of authors is: ' + JSON.stringify(listAuthors);
	 		document.body.appendChild(h1);
	 		
	 		let p = document.createElement('p');
			p.innerHTML = 'The count of shout Events to create authorsList is (without first eventfrom tourattle.js): ' + countShouts;
	 		document.body.appendChild(p);
		}

 		console.log(authorToAdd);				
  		}, false);
	}
}

function delayInside(element) {
	setTimeout(() => {
		element.style.backgroundColor = 'white';
	}, 1000);
}

 let countShouts = 1;
 let listAuthors = [];
 const renderer = new Renderer();

 renderer.renderEvent();