export const camelCaseTrim = (string: string) => {
  let result = '';
  const wordArr = string.split(/\s+/);
  const exceptions = ['of', 'de', 'and'];

  for (let word of wordArr) {
    if (word) {
      // Remove exceptions
      result += (exceptions.includes(word)) ? word : word[0].toUpperCase() + word.slice(1);
      // Add space unless word at end of string
      result += (wordArr.indexOf(word) !== wordArr.length - 1) ? ' ' : '';
    }
  }

  return result;
}