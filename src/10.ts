function createChristmasTree(ornaments: string, height: number): string {
  let prevIndex = -1;
  function getNextChar() {
    prevIndex = prevIndex < ornaments.length - 1 ? prevIndex + 1 : 0;

      return ornaments[prevIndex];
  }


  /* ------------------------------------------------------------------------ */

  const levels = Array(height)
    .fill(0)
    .map((_, index) => {
      const charStr = Array(index + 1)
        .fill(0)
        .map(getNextChar)
        .join(" ");

      return charStr.padStart(charStr.length + (height - (index + 1)), " ");
    });

  return `${levels.join("\n")}${levels.length ? "\n" : ""}${"|".padStart(
    height,
    " "
  )}\n`;
}
