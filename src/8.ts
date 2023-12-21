function organizeGifts(gifts: string): string {
  const giftTypes = Array.from(gifts.matchAll(/\d{1,10}/g));

  return giftTypes.reduce((acc, giftTypeMatch) => {
    const [giftTypeAmount] = giftTypeMatch;
    const numberOfGiftsInType = parseInt(giftTypeAmount, 10);
    const symbolIndex = giftTypeMatch.index + giftTypeAmount.length;
    const symbol = gifts[symbolIndex];
    const amountsFor = {
      pallet: 50,
      box: 10,
    };

    const pallets = Math.floor(numberOfGiftsInType / amountsFor.pallet);
    const boxes = Math.floor(
      (numberOfGiftsInType - pallets * amountsFor.pallet) / amountsFor.box
    );
    const leftOvers =
      numberOfGiftsInType -
      pallets * amountsFor.pallet -
      boxes * amountsFor.box;

    return (
      acc +
      [
        `[${symbol}]`.repeat(pallets),
        `{${symbol}}`.repeat(boxes),
        leftOvers ? `(${symbol.repeat(leftOvers)})` : "",
      ].join("")
    );
  }, "");
}

const output = organizeGifts("76a11b");

console.log({ output, testCase: output === "[a]{a}{a}(aaaaaa){b}(b)" });
