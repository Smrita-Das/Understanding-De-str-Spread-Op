let arr = [1, 2, 3, 4, 5];
console.log(arr);

let [a,b,c] = arr;
console.log(a,b,c);

let [x,,y] = arr;
console.log(x,y);

let [p,...q] = arr;
console.log(p,q);

let obj = {
    name: 'Alice', 
    age: 30, 
    city: 'New York'
};
console.log(obj);

let {name, age} = obj;
console.log(name, age);

let {city, ...rest} = obj;
console.log(city, rest);

