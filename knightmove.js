function minKnightSteps(start, target) {
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  const queue = [[start, [start]]];

  const visited = new Set([start.toString()]);

  while (queue.length > 0) {
    const [currentPosition, currentPath] = queue.shift();
    if (currentPosition[0] === target[0] && currentPosition[1] === target[1]) {
      return { steps: currentPath.length - 1, path: currentPath };
    }
    for (const move of moves) {
      const newPosition = [
        currentPosition[0] + move[0],
        currentPosition[1] + move[1],
      ];
      if (!visited.has(newPosition.toString())) {
        const newPath = [...currentPath, newPosition];
        queue.push([newPosition, newPath]);
        visited.add(newPosition.toString());
      }
    }
  }
  return null;
}

const start = [0, 0];
let target;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter target position: ", (input) => {
  target = input.split(" ").map(Number);
  const result = minKnightSteps(start, target);

  console.log(`Minimum number of steps: ${result.steps}`);
  console.log(
    `Path to target: ${result.path.map((pos) => `[${pos}]`).join(" -> ")}`
  );
  rl.close();
});
