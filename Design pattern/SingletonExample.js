const SingletonService = (function () {
    let instance = null;

    // place to define the property and methods of the singleton instance.
    createInstance = () => {
        let localInstance = Object.create(new Object);
        localInstance.sayHello = (name) => {
            console.log(`Hello ${name}`);
        }
        localInstance.performRandomCalc = (name) => {
            console.log(Math.random() * Math.random() * 100);
        }
        return localInstance;
    }

    // define getInstance method which will create (if none exists) AND return the existing instance.
    const getInstance = () => {
        if (!instance) {
            instance = createInstance();
        }
        return instance;
    }

    return {
        getInstance: getInstance
    }

})();

const object1 = SingletonService.getInstance();
object1.sayHello('Nishant');
object1.performRandomCalc();

const object2 = SingletonService.getInstance();
console.log(object1 === object2);