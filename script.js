const X = [
  [12, 7, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const Y = [
  [5, 8, 1],
  [6, 7, 3],
  [4, 5, 9],
];

let result = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

for (a in X) {
  for (b in X[0]) {
  result[a][b]=X[a][b]+Y[a][b]
  }
}
console.log(result)
