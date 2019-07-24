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

let isAlive = true;

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

    setNextTimeout(time) {
        setTimeout(() => {
                if (isAlive) {
                    this.fireEvent(this.getRandomInterval(1, 5), this.createEvent());
                    return this.setNextTimeout(time);
            }
                return;
        }, time);
    }

    startEventDispatching() {
        isAlive = true;
        this.fireEvent(this.getRandomInterval(1, 5), this.createEvent());
        this.setNextTimeout(5002);
    }

    stopEventDispatching() {
        isAlive = false;
    }
}