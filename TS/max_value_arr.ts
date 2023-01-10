function max<T>(arr: T[]): T {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(max([1, 2, 3])); // 3
console.log(max(["apple", "banana", "cherry"])); // "cherry"
