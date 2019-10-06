class Subject {
    constructor() {
        this.ObserverList = [];
    }
    notify(event) {
        this.ObserverList.forEach(element => {
            element.update(event);
        });
    }
    subscribe(Observer) {
        this.ObserverList.push(Observer);
    }
    unsubscribe(observer) {
        this.ObserverList = this.ObserverList.filter(element => element !== observer);
    }
}

class Observer {
    constructor() {
        this.id = Math.random();
    }
    update(event) {
        console.log('Updated for...', event);
    }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify('Delete event called.');

subject.unsubscribe(observer2);
subject.notify('Reset event called.');


