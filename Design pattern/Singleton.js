// Singleton created using closure.
const singletonProvider = (function () {
    let instance;
    return {
        getInstance: () => {
            if (!instance) {
                instance = Object.create({ hello: () => 'Hello World' });
            }
            return instance;
        }
    }
})();

const value1 = singletonProvider.getInstance();
const value2 = singletonProvider.getInstance();
console.log(value1.hello());
console.log(value1 === value2); //true


// ** Normal situtaion
class World {
    constructor(params) { }
}
const v1 = new World();
const v2 = new World();
console.log(v1 === v2); // false
