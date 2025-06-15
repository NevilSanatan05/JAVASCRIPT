const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_array = another_array.flat(Infinity);
console.log('Flattened Array:', real_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Hitesh")); // false
console.log(Array.from("Hitesh")); // ['H', 'i', 't', 'e', 's', 'h']
console.log(Array.from(Object.keys({ name: "hitesh" }))); // ['name']
