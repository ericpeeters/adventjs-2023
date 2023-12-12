function findNaughtyStep(original, modified) {
  if (original === modified) {
    return "";
  }

  let deviation = "";
  const longest = modified.length > original.length ? modified : original;
  const shortest = modified.length > original.length ? original : modified;

  for (let i = 0; i < longest.length; i++) {
    if (shortest[i] === undefined || longest[i] !== shortest[i]) {
      deviation = longest[i];
      break;
    }
  }

  return deviation;
}
