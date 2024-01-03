function getIndexsForPalindrome(word): number[] | null {
  const isPalinDrome = (word: string): boolean =>
    word.split("").reverse().join("") === word;

  if (isPalinDrome(word)) return [];

  let indexesToSwap = [];
  const wordArr = word.split("");

  top: for (let i = 0; i < word.length; i++) {
    for (let j = 1; j < word.length; j++) {
      let copy = [...wordArr];
      copy[i] = word[j];
      copy[j] = word[i];

      if (isPalinDrome(copy.join(""))) {
        indexesToSwap = [i, j];
        break top;
      }
    }
  }

  return indexesToSwap.length ? indexesToSwap : null;
}

/* ========================================================================== */

const one = JSON.stringify(getIndexsForPalindrome("anna"));
console.log(1, { output: one, testCase: one === "[]" });

const two = JSON.stringify(getIndexsForPalindrome("abab"));
console.log(2, { output: two, testCase: two === "[0,1]" });

const three = getIndexsForPalindrome("abac");
console.log(3, { output: three, testCase: three === null });

const four = JSON.stringify(getIndexsForPalindrome("aaaaaaaa"));
console.log(4, { output: four, testCase: four === "[]" });

const five = JSON.stringify(getIndexsForPalindrome("aaababa"));
console.log(5, { output: five, testCase: five === "[1,3]" });

const six = getIndexsForPalindrome("caababa");
console.log(6, { output: six, testCase: six === null });

/* ========================================================================== */

export default void 0;
