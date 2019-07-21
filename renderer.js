class Renderer{ 

	renderEvent(){

	document.addEventListener("shout", function(event) {

		let div = document.createElement('div');

		let authorId = '';
		let authorName = '';
		let authorToAdd = {};

		authorId = event.detail.author._id;
		authorName = event.detail.author.name;
		authorToAdd._id = authorId;
		authorToAdd.name = authorName;

		let str = 'author is ' + JSON.stringify(event.detail.author) + 
 								'; text is ' + event.detail.text;
 		div.innerHTML = str;
	 	
 		if (listAuthors.length == 0) {
 			document.body.appendChild(div);
 			listAuthors.push(authorToAdd);
 		}
 		if(listAuthors.length >= 1){
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
 		console.log(authorToAdd);				
  		}, false);
	}

	getAuthorToAdd() {
		let touratte = new Touratte();
		let time = touratte.getRandomInterval(1, 5);
		let eventToUse = touratte.createEvent();

 		touratte.getEvent(time, eventToUse);
	}

	getArray() {
		let h1 = document.createElement('h1');
		h1.innerHTML = 'The list of authors is: ' + JSON.stringify(listAuthors);
	 	document.body.appendChild(h1);
	}

	getCountShout() {
		let p = document.createElement('p');
		p.innerHTML = 'The list of authors is: ' + countShouts;
	 	document.body.appendChild(p);
	}

	stopEvent(event){
		event.preventDefault();
	}
}
 let countShouts = 0;
 let listAuthors = [];
 const renderer = new Renderer();

renderer.renderEvent();

function delay() {
	return new Promise((resolve) => {
			setTimeout(() => {
				renderer.getAuthorToAdd();
				countShouts++;
				console.log("listAuthors.length after PROMISE-------->" + listAuthors.length);
				console.log("countShouts after PROMISE-------->" + countShouts);
				resolve();
				if (listAuthors.length < 3) {
					return delay();
				}
				if (listAuthors.length == 3) {
					renderer.getArray();
					renderer.getCountShout();
					return;
				}
			}, 5002);
	});
}

delay();