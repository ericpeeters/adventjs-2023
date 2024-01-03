function drawGift(size: number, symbol: string): string {
  const legend = {
    padding: "#",
    end: "\n",
  };

  if (size === 1) {
    return `${legend.padding}${legend.end}`;
  }

  const symbolAmount = size - 2;
  const startAndEnd = " ".repeat(size - 1) + "#".repeat(size);
  const drawingUntilCenter: string[] = Array(size - 2)
    .fill("")
    .reduce((drawing: string[], _, index) => {
      const whiteSpaceBefore = " ".repeat(size - (index + 2));
      const start = `${drawing}${whiteSpaceBefore}${
        legend.padding
      }${symbol.repeat(symbolAmount)}`;
      const paddingAmountAfterStart = index === 0 ? 2 : 1;
      const symbolsAfterPadding = symbol.repeat(index);
      const finalPadding = index > 0 ? legend.padding : "";

      drawing.push(
        `${start}${legend.padding.repeat(
          paddingAmountAfterStart
        )}${symbolsAfterPadding}${finalPadding}${legend.end}`
      );

      return drawing;
    }, []);
  const center = `${legend.padding.repeat(size)}${symbol.repeat(symbolAmount)}${
    legend.padding
  }`;
  const drawingAfterCenter = [...drawingUntilCenter]
    .reverse()
    .map((line) => line.replaceAll(" ", ""));

  const finalDrawing = [
    startAndEnd,
    drawingUntilCenter,
    center,
    drawingAfterCenter,
    startAndEnd.replaceAll(" ", ""),
  ];

  return finalDrawing.flat().join("\n");
}

// console.log({
//   drawing: drawGift(4, "+"),
//   testCase:
//     drawGift(4, "+") ===
//     `
//         ####
//        #++##
//       #++#+#
//      ####++#
//      #++#+#
//      #++##
//      ####\n`,
// });

console.log({
  // drawing: drawGift(5, "*"),
  testCase:
    drawGift(5, "*") ===
    `
         #####
        #***##
       #***#*#
      #***#**#
     #####***#
     #***#**#
     #***#*#
     #***##
     #####\n`,
});

// console.log({
//   drawing: drawGift(1, "^"),
//   testCase: drawGift(1, "+") === `#\n`,
// });
