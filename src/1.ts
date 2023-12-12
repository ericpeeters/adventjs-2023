function findFirstRepeated(gifts: number[]): number {
  return (
    gifts.find((gift: number, index: number) => gifts.indexOf(gift) < index) ??
    -1
  );
}
