function drawGift(size: number, symbol: string): string {
  const legend = {
    padding: "#",
    end: "\n",
  };

  // The easiest case is when size is 1,
  // since we don't have to calculate anything
  if (size === 1) {
    return `${legend.padding}${legend.end}`;
  }

  Array(size - 1).reduce((drawingAroundCenter, index) => {
    const spacingBefore = size - index + 1;
  }, "");

  const spacing = Array(size).join(" ");
  const start = `${spacing}${legend.padding.repeat(size)}`;

  return start;
}

console.log({
  drawing: drawGift(4, "+"),
  testCase:
    drawGift(3, "+") ===
    `   ####
       #++##
      #++#+#
     ####++#
     #++#+#
     #++##
     ####\n`,
});

console.log({
  drawing: drawGift(5, "*"),
  testCase:
    drawGift(5, "*") ===
    `    #####
        #***##
       #***#*#
      #***#**#
     #####***#
     #***#**#
     #***#*#
     #***##
     #####\n`,
});

console.log({
  drawing: drawGift(1, "^"),
  testCase: drawGift(1, "+") === `#\n`,
});
