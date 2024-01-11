function calculateTime(deliveries: string[]): string {
  const doubleDigits = (num: number) => num.toString().padStart(2, "0");

  const maxDeliverySeconds = 7 * 60 * 60;
  const totalDeliverySeconds = deliveries.reduce((total, delivery) => {
    const [hours, minutes, seconds] = delivery.split(":").map(Number);
    const hoursInSeconds = hours * 60 * 60;
    const minutesInSeconds = minutes * 60;

    return total + hoursInSeconds + minutesInSeconds + seconds;
  }, 0);

  const totalSeconds = maxDeliverySeconds - totalDeliverySeconds;
  const isThereTimeLeft = totalSeconds > 0;

  let totalHours = Math.floor(totalSeconds / 60 / 60);
  let totalMinutes = Math.floor((totalSeconds / 60) % 60);
  let totalSecondsRemainder = totalSeconds % 60;

  console.log({ totalHours, totalMinutes, totalSecondsRemainder });

  if (totalMinutes < 0) {
    totalHours++;
    totalMinutes += totalMinutes * -1;
  }

  if (totalSecondsRemainder < 0) {
    totalMinutes++;
    totalSecondsRemainder += totalSecondsRemainder * -1;
  }

  return `${isThereTimeLeft ? "-" : ""}${doubleDigits(
    totalHours
  )}:${doubleDigits(totalMinutes)}:${doubleDigits(totalSecondsRemainder)}`;
}

/* ========================================================================== */

// const one = calculateTime(["00:10:00", "01:00:00", "03:30:00"]);
// console.log(one, one === "-02:20:00");

// const two = calculateTime(["02:00:00", "05:00:00", "00:30:00"]);
// console.log(two, two === "00:30:00");

// const three = calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"]);
// console.log(three, three === "-05:29:00");

const four = calculateTime(["01:01:01", "09:59:59", "01:01:01"]);
console.log(four, four === "05:02:01");

/* ========================================================================== */

export default void 0;
