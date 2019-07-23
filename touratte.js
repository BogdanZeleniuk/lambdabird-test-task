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
                author: this.getAuthor(authorsList),
                text: this.getText(this.getRandomNumber())
            }
        });
        return event;
    }

    fireEvent(time, event){
        setTimeout(function () {
            document.dispatchEvent(event);
        }, time * 1000); 
    };

    buildAuthorsList(time) {
        setTimeout(() => {
            countShouts++;
            if (listAuthors.length < 3) {
                if (!isAlive) {
                return;
            }
                this.fireEventIfIsNeeded();
                return this.buildAuthorsList(time);
            }
        }, time);
    }

    fireEventIfIsNeeded() {
            let touratteNext = new Touratte();
            let randomIntervalNext = touratteNext.getRandomInterval(1, 5);
            let createdEventNext = touratteNext.createEvent();
            touratteNext.fireEvent(randomIntervalNext, createdEventNext);  
    }
}

let isAlive = true;

function startEventDispatching() {
    let touratte = new Touratte();
    let randomNumber = touratte.getRandomNumber();
    let randomInterval = touratte.getRandomInterval(1, 5);
    let createdEvent = touratte.createEvent();
    isAlive = true;
    touratte.fireEvent(randomInterval, createdEvent);
    touratte.buildAuthorsList(5002);
}

function stopEventDispatching() {
    isAlive = false;
}