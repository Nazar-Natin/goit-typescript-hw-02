interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair1: KeyValuePair<string, number> = { key: "age", value: 25 };
const pair2: KeyValuePair<string, string> = { key: "name", value: "John" };

console.log(pair1);
console.log(pair2);

export {};
