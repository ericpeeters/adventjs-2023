function manufacture(gifts: string[], materials: string): string[] {
  const hasMaterials = (giftChar: string) => materials.includes(giftChar);
  return gifts.filter((gift) => {
    const splitGifts = gift.split("");

    return splitGifts.every(hasMaterials);
  });
}
