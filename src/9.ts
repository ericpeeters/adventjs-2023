function adjustLights(lights: string[]): number {
  // Code here
  const lightOptions = {
    red: "🔴",
    green: "🟢",
  } as const;
  type LightOption = (typeof lightOptions)[keyof typeof lightOptions];

  const setNextExpectation = (l: LightOption) =>
    l === lightOptions.green ? lightOptions.red : lightOptions.green;

  const findAnomalies = (startingLight: LightOption) => {
    return lights.reduce((anomalies, currentLight: LightOption) => {
      if (currentLight !== startingLight) anomalies++;

      startingLight = setNextExpectation(startingLight ?? currentLight);

      return anomalies;
    }, 0);
  };

  return [
    findAnomalies(lightOptions.red),
    findAnomalies(lightOptions.green),
  ].reduce((min, current) => (current < min ? current : min), Infinity);
}

// Fun alternative, didn't work for bottom test case unfortunately
/* function adjustLights(lights: string[]): number {
  const getLightsAnomalies = (c: "🔴" | "🟢"): number => {
    return Array.from(lights.join("").matchAll(new RegExp(`${c}${c}`, "g")))
      .length;
  };

  return getLightsAnomalies("🔴") + getLightsAnomalies("🟢");
} */

const one = adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
console.log({ output: one, testCase: one === 1 });
const two = adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]);
console.log({ output: two, testCase: two === 2 });
const three = adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]);
console.log({ output: three, testCase: three === 0 });
const four = adjustLights(["🔴", "🔴", "🔴"]);
console.log({ output: four, testCase: four === 1 });
const five = adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"]);
console.log({ output: five, testCase: five === 1 });
const six = adjustLights(["🟢", "🔴", "🔴", "🟢", "🔴", "🔴", "🔴", "🔴"]);
console.log({ output: six, testCase: six === 4 });
