const label = 'name';
const value = {
    x: 20,
    y: 40,
    [label]: 'Nishant',
    u: 1,
    complex: {
        engineCapacity: "500HP"
    }
};

const { x, y, z = 80, u, complex: { engineCapacity } } = value;
console.log(value);
console.log(x, y, z, u, engineCapacity);

// reversing value 
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1


const color = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];
// Use nested destructuring to assign red, green and blue
const [hex, [red, green, blue]] = color;
console.log(hex, red, green, blue); // #FF00FF 255 0 255