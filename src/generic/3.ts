function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const mergedObject = merge({ name: "John" }, { age: 30 });

console.log(mergedObject);
