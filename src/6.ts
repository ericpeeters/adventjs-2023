function maxDistance(movements: string): number {
  const legend = {
    right: ">",
    left: "<",
    joker: "*",
  };

  const steps = movements.split("");
  const stepsRight = steps.filter((step) => step === legend.right).length;
  const stepsLeft = steps.filter((step) => step === legend.left).length;
  const stepsJoker = steps.filter((step) => step === legend.joker).length;

  if (stepsRight > stepsLeft) {
    return stepsRight + stepsJoker - stepsLeft;
  } else {
    return stepsLeft + stepsJoker - stepsRight;
  }
}

console.log({
  distance: maxDistance(">>*<"),
  testCase: maxDistance(">>*<") === 2,
});
console.log({
  distance: maxDistance("<<<>"),
  testCase: maxDistance("<<<>") === 2,
});
console.log({
  distance: maxDistance(">***>"),
  testCase: maxDistance(">***>") === 5,
});
console.log({
  distance: maxDistance("<<**>>"),
  testCase: maxDistance("<<**>>") === 2,
});
