function decode(message: string): string {
  type ParenPair = {
    opening: RegExpMatchArray;
    closing?: RegExpMatchArray;
  };

  const parenMatches = Array.from(message.matchAll(/[(|)]/g));
  const parenPairs: ParenPair[] = [];
  let prevChar: string | undefined;

  parenMatches.forEach((paren) => {
    const [char] = paren;

    if (char === "(") {
      parenPairs.push({ opening: paren });
    }

    if (char === ")") {
      const matchingPair =
        parenPairs?.findLast((p: ParenPair) => !!p.opening && !p.closing) ??
        null;

      if (matchingPair) {
        matchingPair.closing = paren;
      }
    }

    prevChar = char;
  });

  parenPairs.forEach((pair: ParenPair) => {
    const betweenParens = message.substring(
      pair.opening.index + 1,
      pair.closing.index
    );

    console.log(betweenParens);
  });

  return "";
}

console.log(decode("hola (odnum)") === "hola mundo");
// console.log("hola (odnum):", decode("hola (odnum)"));
// console.log(decode("(olleh) (dlrow)!") === "hello world!");
console.log("(olleh) (dlrow)!:", decode("(olleh) (dlrow)!"));
// console.log(decode("sa(u(cla)atn)s") === "santaclaus");
// console.log("sa(u(cla)atn)s:", decode("sa(u(cla)atn)s"));
