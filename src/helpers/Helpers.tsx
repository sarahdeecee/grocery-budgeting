import { ItemType } from "../Types";

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

export const formatPrice = (price: number): string => {
  const roundedPrice = Math.round(price)
  if (roundedPrice % 100 === 0) {
    return `$${roundedPrice/100}.00`;
  } else if (roundedPrice % 10 === 0) {
    return `$${roundedPrice/100}0`
  } else {
    return `$${roundedPrice/100}`
  }
}

export const sortAZ = (a: ItemType, b: ItemType): number => {
  const nameA = a.name.toLowerCase();
  const nameB = a.name.toLowerCase();
  return (nameA < nameB) ? -1 : 1;
}
export const sortZA = (a: ItemType, b: ItemType): number => {
  const nameA = a.name.toLowerCase();
  const nameB = a.name.toLowerCase();
  return (nameA < nameB) ? 1 : -1;
}