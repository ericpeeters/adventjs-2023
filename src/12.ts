function checkIsValidCopy(original: string, copy: string): boolean {
  if (original === copy) {
    return true;
  }

  if (original.length !== copy.length) {
    return false;
  }

  const degradingChars = ["#", "+", ":", ".", " "];
  const hasDegraded = (c: string) => degradingChars.includes(c);

  for (let i = 0; i < original.length - 1; i++) {
    if (original[i] === " " && copy[i] !== " ") {
      return false;
    }

    if (
      original[i] !== copy[i] &&
      original[i].toLowerCase() !== copy[i] &&
      !hasDegraded(copy[i])
    ) {
      return false;
    }

    if (hasDegraded(original[i])) {
      const originalIndex = degradingChars.indexOf(original[i]);
      const copyIndex = degradingChars.indexOf(copy[i]);

      if (originalIndex > copyIndex) {
        return false;
      }
    }
  }

  return true;
}

/* ========================================================================== */

const one = checkIsValidCopy("Santa Claus is coming", "sa#ta Cl#us i+ comin#");

console.log(1, one === true);

const two = checkIsValidCopy("s#nta Cla#s is coming", "p#nt: cla#s #s c+min#");

console.log(2, two === false);

const three = checkIsValidCopy("Santa Claus", "s#+:. c:. s");

console.log(3, three === true);

const four = checkIsValidCopy("Santa Claus", "s#+:.#c:. s");

console.log(4, four === false);

const five = checkIsValidCopy("3 #egalos", "3 .+:# #:");

console.log(5, five === true);

const six = checkIsValidCopy(
  "Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños",
  "Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño"
);

console.log(6, six === false);

/* ========================================================================== */

export default void 0;
