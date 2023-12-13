function cyberReindeer(road: string, time: number): string[] {
  const legend = {
    closedBarrier: "|",
    openBarrier: "*",
    road: ".",
    sled: "S",
  } as const;

  let timeUnitsBeforeBarrierOpen = 5;
  let latestRoadState = road;

  /* ------------------------------------------------------------------------ */

  function getBarrierCharacter() {
    return timeUnitsBeforeBarrierOpen === 0
      ? legend.openBarrier
      : legend.closedBarrier;
  }

  function openBarriers() {    
    latestRoadState = latestRoadState.replaceAll(
      legend.closedBarrier,
      legend.openBarrier
    );
  }

  /* ------------------------------------------------------------------------ */

  const roadBlockIndexes = road
    .split("")
    .reduce((acc: number[], curr: string, index: number): number[] => {
      if (curr === legend.closedBarrier) {
        acc.push(index);
      }

      return acc;
    }, []);

  /* ------------------------------------------------------------------------ */

  return Array(time)
    .fill("")
    .map((_, index) => {
      if (index === 0) {
        // Initial state  
        return latestRoadState;
      }

      const sledIndex = latestRoadState.indexOf(legend.sled);

      if (timeUnitsBeforeBarrierOpen !== 0) {
        timeUnitsBeforeBarrierOpen--;
      }

      if (timeUnitsBeforeBarrierOpen === 0) {
        openBarriers();
      }

      const splitLatestRoad = latestRoadState.split("");
      const roadIsBlocked =
        splitLatestRoad[sledIndex + 1] === legend.closedBarrier;

      if (!roadIsBlocked) {
        splitLatestRoad[sledIndex] = roadBlockIndexes.includes(sledIndex)
          ? getBarrierCharacter()
          : legend.road;
        splitLatestRoad[sledIndex + 1] = legend.sled;

        latestRoadState = splitLatestRoad.join("");
      }

      return latestRoadState;
    });
}
