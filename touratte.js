const authorsList = [
    {
        _id: 1,
        name: 'Todd'
    },
    {
        _id: 3,
        name: 'Rob'
    },
    {
        _id: 3,
        name: 'Sevil'
    }
];

class Touratte {

    getAuthor(list) {
        let randomNumber = Math.floor((Math.random() * list.length));
        let author = list[randomNumber];
        return author;
    }

    getText(countOfSymbols) {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = [];
        for (var i = 0; i < countOfSymbols; i++) {
            result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
        }
        return result.join('');
    }

    getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }

    getRandomInterval(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    createEvent(){
        let event = new CustomEvent("shout", {
            detail: 
            {
                author: touratte.getAuthor(authorsList),
                text: touratte.getText(randomNumber)
            }
        });
        return event;
    }

    getEvent(time, event){
        setTimeout(function () {
            document.dispatchEvent(event);
        }, time * 1000); 
    };
}

const touratte = new Touratte();

let randomNumber = touratte.getRandomNumber();

const randomInterval = touratte.getRandomInterval(1, 5);

let createdEvent = touratte.createEvent();

touratte.getEvent(randomInterval, createdEvent);  

