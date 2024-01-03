function createChristmasTree(ornaments: string, height: number): string {
  class CharGetter {
    private _index = -1;

    get nextChar() {
      this._index = this._index < ornaments.length - 1 ? this._index + 1 : 0;

      return ornaments[this._index];
    }
  }

  /* ------------------------------------------------------------------------ */

  const charGetter = new CharGetter();
  const levels = Array(height)
    .fill(0)
    .map((_, index) => {
      const charStr = Array(index + 1)
        .fill(0)
        .map(() => charGetter.nextChar)
        .join(" ");

      return charStr.padStart(charStr.length + (height - (index + 1)), " ");
    });

  return `${levels.join("\n")}${levels.length ? "\n" : ""}${"|".padStart(
    height,
    " "
  )}\n`;
}

/* ========================================================================== */

// const one = createChristmasTree("1", 1);
// console.log({ output: one, testCase: one === "|" });

// const two = createChristmasTree("123", 4);
// console.log({
//   output: two,
//   testCase:
//     two ===
//     `
//    1
//   2 3
//  1 2 3
// 1 2 3 1
//    |`,
// });

// const three = createChristmasTree("*@o", 3);

// console.log({
//   output: three,
//   testCase:
//     three ===
//     `
//   *
//  @ o
// * @ o
//   |`,
// });

/* ========================================================================== */

export default void 0;
