export const capitalize = (word) => {
  if (word) {
    return word
      .toLowerCase()
      .replace(/\w/, (firstLetter) => firstLetter.toUpperCase());
  }
};
